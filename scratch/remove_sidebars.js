const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? 
            walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

function removeSidebar(content) {
    // We look for <nav className="hidden md:flex... or <aside className="hidden md:flex...
    // and carefully remove the block by balancing tags
    
    let result = content;
    let modified = false;

    // A helper to find matching closing tag
    function findAndRemoveBlock(startRegex) {
        let match = startRegex.exec(result);
        if (!match) return false;

        let startIndex = match.index;
        let tagType = match[1]; // 'nav' or 'aside'
        
        let openTags = 0;
        let i = startIndex;
        
        // Find the first >
        while(i < result.length && result[i] !== '>') i++;
        openTags = 1;
        i++;

        // Keep going until we close the tag
        while(i < result.length && openTags > 0) {
            if (result.substring(i, i + 2 + tagType.length) === `</${tagType}>`) {
                openTags--;
                if (openTags === 0) {
                    i += 2 + tagType.length;
                    break;
                }
            } else if (result.substring(i, i + 1 + tagType.length) === `<${tagType}`) {
                // To be safe, verify it's <nav or <nav>
                let nextChar = result[i + 1 + tagType.length];
                if (nextChar === ' ' || nextChar === '>') {
                    openTags++;
                }
            }
            i++;
        }

        // Remove the block
        result = result.substring(0, startIndex) + result.substring(i);
        return true;
    }

    // Keep removing until no more found
    while(findAndRemoveBlock(/<(nav|aside)[^>]*className="[^"]*hidden md:flex[^"]*"[^>]*>/)) {}

    // Also remove the md:ml-[240px] and md:pt-[80px] classes
    let newResult = result
        .replace(/md:ml-\[240px\]\s*/g, '')
        .replace(/md:pt-\[80px\]\s*/g, '')
        .replace(/md:pb-0\s*/g, '')
        .replace(/md:pb-margin-desktop\s*/g, '')
        .replace(/md:p-margin-desktop\s*/g, '');

    if (newResult !== content) modified = true;

    return { content: newResult, modified };
}

walkDir('/Users/0mrajput/Desktop/civicsetu/app', (filePath) => {
    if (filePath.endsWith('.tsx')) {
        let content = fs.readFileSync(filePath, 'utf8');
        let res = removeSidebar(content);
        if (res.modified) {
            fs.writeFileSync(filePath, res.content, 'utf8');
            console.log('Cleaned:', filePath);
        }
    }
});
