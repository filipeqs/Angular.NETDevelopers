import { Trainee } from './Trainee';

export class Buddy {
  length: number;
  traineeList: Trainee[];

  constructor(traineeList: Trainee[]) {
    this.traineeList = traineeList;
    this.length = traineeList.length;
  }

  findTrainee(name: string): Trainee[];
  findTrainee(dob: Date): Trainee[];
  findTrainee(d1: Date, d2: Date): Trainee[];
  findTrainee(name: any, d2?: any): Trainee[] {
    var result: Trainee[] = [];
    if (typeof d2 == 'undefined') {
      if (typeof name == 'string' || name instanceof String) {
        for (let t of this.traineeList) {
          if (t.traineeName == name) {
            result.push(t);
          }
        }
      } else {
        for (let t of this.traineeList) {
          if (t.dob.valueOf() > name.valueOf()) {
            result.push(t);
          }
        }
      }
    } else {
      for (var t of this.traineeList) {
        if (
          t.dob.valueOf() >= name.valueOf() &&
          t.dob.valueOf() <= d2.valueOf()
        ) {
          result.push(t);
        }
      }
    }
    return result;
  }
}
