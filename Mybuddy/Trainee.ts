export class Trainee {
  pcNumber: number;
  traineeName: string;
  phoneNumber: number;
  emailId: string;
  gender: string;
  dob: Date;

  constructor(
    pcNumber: number,
    traineeName: string,
    phoneNumber: number,
    emailId: string,
    gender: string,
    dob: Date
  ) {
    this.pcNumber = pcNumber;
    this.traineeName = traineeName;
    this.phoneNumber = phoneNumber;
    this.emailId = emailId;
    this.gender = gender;
    this.dob = dob;
  }
}
