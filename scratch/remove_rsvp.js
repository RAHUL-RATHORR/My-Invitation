const fs = require('fs');
const path = require('path');

const dir = path.join(process.cwd(), 'frontend/src/components/templates');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Remove import
  content = content.replace(/import\s+RSVPForm\s+from\s+['"]\.\.\/shared\/RSVPForm['"];?\n?/, '');

  content = content.replace(/[\n\s]*<section[^>]*>[\s\S]*?<RSVPForm[\s\S]*?<\/section>/, '');

  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Updated ' + file);
}
