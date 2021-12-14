const employees: number[] = [1001, 1002, 1003, 1004];
const employeeName: string[] = ['john', 'Jessica', 'Jacob', 'Jim'];
const salary: number[] = [10000, 20000, 30000, 30000];
console.log(typeof employees);
let sum = 0;
for (var i = 0; i < salary.length; i++) {
  sum += salary[i];
}
console.log(`Total salary ${sum}`);
console.log(`------------------------------------`);
console.log('List of employees');
for (let employee of employeeName) {
  console.log(employee);
}
console.log(`------------------------------------`);
console.log('Incremented salary of employees');
for (let index in employees) {
  salary[index] = salary[index] + 100;
  console.log(`${employeeName[index]} incremented salary is ${salary[index]}`);
}
console.log(`------------------------------------`);

const employeeId_one = new Array(4);
//creates an array with 4 undefined elements
for (let index_one of employeeId_one) {
  console.log(index_one);
}

const employeeId_two = new Array(4, 8);
for (let index_two of employeeId_two) {
  console.log(index_two);
}
