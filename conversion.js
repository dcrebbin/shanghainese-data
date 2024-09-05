const fs = require('fs');

const CONVERSION_MAP = JSON.parse(fs.readFileSync('romanization.json', 'utf8'));

const chineseText = '我愛你';

let convertedText = '';

for (const char of chineseText) {
    convertedText += CONVERSION_MAP[char];
}

console.log(convertedText);
