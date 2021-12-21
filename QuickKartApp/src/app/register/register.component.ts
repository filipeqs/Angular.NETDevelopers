import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
      gender: [''],
      password: [''],
      dateOfBirth: [''],
      address: [''],
    });
  }

  submitForm() {
    if (this.registerForm.valid) {
      this.msg = 'Signup Successful';
    } else {
      this.msg = 'Try again Later';
    }
  }
}
