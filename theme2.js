const fs = require('fs');
const path = require('path');

const replacements = [
  { regex: /#111111/gi, replace: '#111111' },
  { regex: /#000000/gi, replace: '#000000' }
];

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file === 'node_modules' || file === '.git' || file === 'build') continue;
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.css') || fullPath.endsWith('.html') || fullPath.endsWith('.js')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let modified = false;
      replacements.forEach(r => {
        if (r.regex.test(content)) {
          content = content.replace(r.regex, r.replace);
          modified = true;
        }
      });
      if (modified) {
        fs.writeFileSync(fullPath, content);
        console.log(`Updated colors in ${fullPath}`);
      }
    }
  }
}

processDir(__dirname);
console.log('Colors replaced successfully!');
