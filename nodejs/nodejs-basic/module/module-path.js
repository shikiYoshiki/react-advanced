const path = require('path');

const filepath = '/users/samurai/docs/file.txt';

console.log(path.basename(filepath));
console.log(path.dirname(filepath));
console.log(path.extname(filepath));

const fullPath = path.join('project', 'webapp', 'assets', 'logo.png');
console.log(fullPath);