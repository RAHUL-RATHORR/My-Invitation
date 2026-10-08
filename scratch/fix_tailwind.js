const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'frontend/src/components/templates/RoyalGates.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Replacements
content = content.replace(/#d4af37/g, 'primary');
content = content.replace(/bg-gradient-to-/g, 'bg-linear-to-');
content = content.replace(/rounded-\[2rem\]/g, 'rounded-4xl');
content = content.replace(/tracking-\[0\.1em\]/g, 'tracking-widest');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Cleaned up Tailwind warnings in RoyalGates.tsx');
