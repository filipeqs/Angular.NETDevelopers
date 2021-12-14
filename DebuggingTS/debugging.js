debugger;
var input = 'stringofcharacters';
var count = 0;
for (var i = 0; i < input.length; i++) {
    var substring = input.substring(i, i + 1);
    if (substring == 's')
        count++;
}
console.log('Number of characters', count);
