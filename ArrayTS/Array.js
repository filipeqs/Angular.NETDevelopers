var employees = [1001, 1002, 1003, 1004];
var employeeName = ['john', 'Jessica', 'Jacob', 'Jim'];
var salary = [10000, 20000, 30000, 30000];
console.log(typeof employees);
var sum = 0;
for (var i = 0; i < salary.length; i++) {
    sum += salary[i];
}
console.log("Total salary ".concat(sum));
console.log("------------------------------------");
console.log('List of employees');
for (var _i = 0, employeeName_1 = employeeName; _i < employeeName_1.length; _i++) {
    var employee = employeeName_1[_i];
    console.log(employee);
}
console.log("------------------------------------");
console.log('Incremented salary of employees');
for (var index in employees) {
    salary[index] = salary[index] + 100;
    console.log("".concat(employeeName[index], " incremented salary is ").concat(salary[index]));
}
console.log("------------------------------------");
var employeeId_one = new Array(4);
//creates an array with 4 undefined elements
for (var _a = 0, employeeId_one_1 = employeeId_one; _a < employeeId_one_1.length; _a++) {
    var index_one = employeeId_one_1[_a];
    console.log(index_one);
}
var employeeId_two = new Array(4, 8);
for (var _b = 0, employeeId_two_1 = employeeId_two; _b < employeeId_two_1.length; _b++) {
    var index_two = employeeId_two_1[_b];
    console.log(index_two);
}
