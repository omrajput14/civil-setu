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

walkDir('/Users/0mrajput/Desktop/civicsetu/app', (filePath) => {
    if (filePath.endsWith('.tsx')) {
        let content = fs.readFileSync(filePath, 'utf8');
        let newContent = content.replace(/className="fixed bottom-/g, 'className="sticky bottom-');
        if (newContent !== content) {
            fs.writeFileSync(filePath, newContent, 'utf8');
            console.log('Replaced fixed with sticky in:', filePath);
        }
    }
});
