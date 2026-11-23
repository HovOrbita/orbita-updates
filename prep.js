// Готовит package.json программы для сборщика: убирает служебные поля разработки.
const fs = require('fs');
const f = 'app/package.json', p = JSON.parse(fs.readFileSync(f, 'utf8'));
delete p.build; delete p.devDependencies; delete p.scripts;
p.productName = 'Orbita Trading';
fs.writeFileSync(f, JSON.stringify(p, null, 2) + '\n');
console.log('build', p.orbitaBuild, p.orbitaBuildLabel);
