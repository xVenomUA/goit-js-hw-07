import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const a = (0x59).toString(2); 
const b = a.split('');
console.log(b);
let sum = 0; 
for (let i = 0; i < b.length; i++) {
    if (b[i] === '1') {
        sum += 1;
    }
}
console.log(sum);
