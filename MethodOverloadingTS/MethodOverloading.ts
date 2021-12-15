function padding(padding: number);
function padding(padding_top_bottom: number, padding_left_right: number);
function padding(
  padding_top: number,
  padding_bottom: number,
  padding_left: number,
  padding_right: number
);
function padding(a: number, b?: number, c?: number, d?: number) {
  if (b === undefined && c === undefined && d === undefined) {
    b = c = d = a;
  } else if (c === undefined && d === undefined) {
    c = a;
    d = b;
  }
  console.log('Top padding: ', a);
  console.log('Left padding: ', b);
  console.log('Bottom padding: ', c);
  console.log('Right padding: ', d);
}
console.log('----------------------------------------\n');
padding(5, 8, 3, 1);
console.log('----------------------------------------\n');
padding(5, 8);
console.log('----------------------------------------\n');
padding(5);
