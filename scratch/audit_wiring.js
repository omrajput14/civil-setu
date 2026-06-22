const fs = require('fs');
const path = require('path');

const targetFiles = [
    'app/page.tsx', // Home
    'app/emergency/page.tsx',
    'app/ward/budget/page.tsx',
    'app/payments/page.tsx',
    'app/vault/page.tsx',
    'app/analytics/page.tsx',
    'app/support/page.tsx',
    'app/schemes/page.tsx',
    'app/certificate-vault/page.tsx'
];

console.log("# Interaction Audit");

targetFiles.forEach(relPath => {
    const fullPath = path.join('/Users/0mrajput/Desktop/civicsetu', relPath);
    if (!fs.existsSync(fullPath)) {
        console.log(`\n## [MISSING] ${relPath}\n`);
        return;
    }
    
    const content = fs.readFileSync(fullPath, 'utf8');
    console.log(`\n## ${relPath}\n`);
    
    // Simple regex for tags
    const buttonRegex = /<button[^>]*>([\s\S]*?)<\/button>/g;
    const aRegex = /<a[^>]*>([\s\S]*?)<\/a>/g;
    const linkRegex = /<Link[^>]*>([\s\S]*?)<\/Link>/g;
    
    let match;
    console.log("### Buttons:");
    while ((match = buttonRegex.exec(content)) !== null) {
        const tag = match[0];
        let innerText = match[1].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ');
        if (!innerText) innerText = "[Icon Button]";
        
        const hasOnClick = tag.includes('onClick=');
        const isSubmit = tag.includes('type="submit"');
        let status = 'DEAD';
        if (hasOnClick) {
            if (tag.includes('router.push')) status = 'WIRED (Nav)';
            else if (tag.includes('setActiveTab') || tag.includes('set')) status = 'WIRED (State)';
            else status = 'WIRED (Other)';
        } else if (isSubmit) {
            status = 'WIRED (Submit Form)';
        }
        console.log(`- [${status}] ${innerText}`);
    }
    
    console.log("\n### Links (a / Link):");
    const checkLink = (regex) => {
        while ((match = regex.exec(content)) !== null) {
            const tag = match[0];
            let innerText = match[1].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ');
            if (!innerText) innerText = "[Icon Link]";
            
            const hrefMatch = tag.match(/href="([^"]+)"/);
            const href = hrefMatch ? hrefMatch[1] : null;
            let status = 'DEAD';
            if (href && href !== '#' && href !== '') {
                status = `WIRED (${href})`;
            }
            console.log(`- [${status}] ${innerText}`);
        }
    };
    checkLink(aRegex);
    checkLink(linkRegex);
});
