enum designFlags {
  none,
  bold,
  italics,
  boldAndItalics,
}

console.log(designFlags.bold); //value
console.log(designFlags[1]); //name
console.log(designFlags[designFlags.bold]); //name of value
