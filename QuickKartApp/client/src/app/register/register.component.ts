import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  msg: string;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      emailId: ['', [Validators.required, Validators.minLength(12)]],
      gender: ['', Validators.required],
      password: ['', Validators.required],
      dateOfBirth: [new Date(), checkDate],
      address: ['', Validators.required],
    });
  }

  submitForm() {
    console.log(this.registerForm.value);
    if (this.registerForm.valid) {
      this.msg = 'Signup Successful';
    } else {
      this.msg = 'Try again Later';
    }
  }
}

function checkDate(control: FormControl) {
  const currentDate = new Date();
  const givenDate = new Date(control.value);

  if (givenDate <= currentDate || givenDate == null) {
    return null;
  } else {
    return {
      dateError: {
        message: "Enter a date less than today's date",
      },
    };
  }
}
