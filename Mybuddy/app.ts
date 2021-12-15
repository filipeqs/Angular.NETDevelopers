import { Buddy } from './Buddy';
import { Gender } from './Gender';
import { Trainee } from './Trainee';

const trOne = new Trainee(
  101,
  'John',
  9945455272,
  'john@gmail.com',
  Gender.Male,
  new Date('December 19, 1981 10:13:00')
);

const trTwo: Trainee = new Trainee(
  102,
  'Jack',
  9945455279,
  'jack@gmail.com',
  Gender.Male,
  new Date('December 21, 1981 10:13:00')
);

const buddy: Buddy = new Buddy([trOne, trTwo]);

for (var i = 0; i < buddy.length; i++) {
  console.log(`PCNumber :${buddy.traineeList[i].pcNumber} `);
  console.log(`traineeName :${buddy.traineeList[i].traineeName} `);
  console.log(`phoneNumber :${buddy.traineeList[i].phoneNumber} `);
  console.log(`emailId :${buddy.traineeList[i].emailId} `);
  console.log(`gender :${buddy.traineeList[i].gender} `);
  console.log(`dob :${buddy.traineeList[i].dob} `);
  console.log(`-----------------------------------------`);
}

var resultOne = buddy.findTrainee('John');
console.log('Search results');
for (var person of resultOne) {
  console.log(person.pcNumber);
  console.log(person.gender);
}
console.log(`-----------------------------------------`);

var resultTwo = buddy.findTrainee(new Date('December 19, 1981 10:13:00'));
for (var person of resultTwo) {
  console.log(person.traineeName);
  console.log(person.pcNumber);
  console.log(person.gender);
}
console.log(`-----------------------------------------`);

var resultThree = buddy.findTrainee(
  new Date('December 19, 1981 10:13:00'),
  new Date('December 23, 1981 10:13:00')
);
for (var person of resultThree) {
  console.log(person.traineeName);
  console.log(person.pcNumber);
  console.log(person.gender);
}
console.log(`-----------------------------------------`);
