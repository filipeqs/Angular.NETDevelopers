var designFlags;
(function (designFlags) {
    designFlags[designFlags["none"] = 0] = "none";
    designFlags[designFlags["bold"] = 1] = "bold";
    designFlags[designFlags["italics"] = 2] = "italics";
    designFlags[designFlags["boldAndItalics"] = 3] = "boldAndItalics";
})(designFlags || (designFlags = {}));
console.log(designFlags.bold); //value
console.log(designFlags[1]); //name
console.log(designFlags[designFlags.bold]); //name of value
