const fs = require('fs');
const path = require('path');

const dir = path.join(process.cwd(), 'frontend/src/components/templates');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Remove import
  content = content.replace(/import\s+RSVPForm\s+from\s+['"]\.\.\/shared\/RSVPForm['"];?\n?/, '');

  // Split content by `<section`
  const parts = content.split('<section');
  let newContent = parts[0];
  for (let i = 1; i < parts.length; i++) {
    if (parts[i].includes('RSVPForm')) {
      // This section contains RSVPForm.
      // We need to find where this section ends, i.e. `</section>`
      // parts[i] starts with ` className="..."...` because we split by `<section`
      // We just drop the string up to the first `</section>`
      const sectionEndIdx = parts[i].indexOf('</section>');
      if (sectionEndIdx !== -1) {
        // Append whatever is after the `</section>`
        newContent += parts[i].substring(sectionEndIdx + '</section>'.length);
      }
    } else {
      newContent += '<section' + parts[i];
    }
  }

  fs.writeFileSync(filePath, newContent, 'utf8');
  console.log('Updated ' + file);
}
