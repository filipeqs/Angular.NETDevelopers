debugger;
const input = 'stringofcharacters';
let count: number = 0;
for (let i = 0; i < input.length; i++) {
  let substring = input.substring(i, i + 1);
  if (substring == 's') count++;
}
console.log('Number of characters', count);
