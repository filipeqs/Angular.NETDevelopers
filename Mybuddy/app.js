"use strict";
exports.__esModule = true;
var Buddy_1 = require("./Buddy");
var Trainee_1 = require("./Trainee");
var trOne = new Trainee_1.Trainee(101, 'John', 9945455272, 'john@gmail.com', 'Male', new Date('December 19, 1981 10:13:00'));
var trTwo = new Trainee_1.Trainee(102, 'Jack', 9945455279, 'jack@gmail.com', 'Male ', new Date('December 21, 1981 10:13:00'));
var buddy = new Buddy_1.Buddy([trOne, trTwo]);
for (var i = 0; i < buddy.length; i++) {
    console.log("PCNumber :".concat(buddy.traineeList[i].pcNumber, " "));
    console.log("traineeName :".concat(buddy.traineeList[i].traineeName, " "));
    console.log("phoneNumber :".concat(buddy.traineeList[i].phoneNumber, " "));
    console.log("emailId :".concat(buddy.traineeList[i].emailId, " "));
    console.log("gender :".concat(buddy.traineeList[i].gender, " "));
    console.log("dob :".concat(buddy.traineeList[i].dob, " "));
    console.log("-----------------------------------------");
}
var resultOne = buddy.findTrainee('John');
console.log('Search results');
for (var _i = 0, resultOne_1 = resultOne; _i < resultOne_1.length; _i++) {
    var person = resultOne_1[_i];
    console.log(person.pcNumber);
    console.log(person.gender);
}
console.log("-----------------------------------------");
var resultTwo = buddy.findTrainee(new Date('December 19, 1981 10:13:00'));
for (var _a = 0, resultTwo_1 = resultTwo; _a < resultTwo_1.length; _a++) {
    var person = resultTwo_1[_a];
    console.log(person.traineeName);
    console.log(person.pcNumber);
    console.log(person.gender);
}
console.log("-----------------------------------------");
var resultThree = buddy.findTrainee(new Date('December 19, 1981 10:13:00'), new Date('December 23, 1981 10:13:00'));
for (var _b = 0, resultThree_1 = resultThree; _b < resultThree_1.length; _b++) {
    var person = resultThree_1[_b];
    console.log(person.traineeName);
    console.log(person.pcNumber);
    console.log(person.gender);
}
console.log("-----------------------------------------");
