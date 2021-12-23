import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from '../interfaces/IUser';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  errorMsg: string;

  constructor(
    private userService: UserService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

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
    if (this.registerForm.valid) {
      const user: IUser = {
        emailId: this.registerForm.controls.emailId.value,
        userPassword: this.registerForm.controls.password.value,
        gender: this.registerForm.controls.gender.value,
        dateOfBirth: this.registerForm.controls.dateOfBirth.value,
        address: this.registerForm.controls.address.value,
        roleId: null,
      };

      this.userService.register(user).subscribe(
        (isSuccess) => {
          if (isSuccess) {
            this.router.navigate(['/login']);
          } else {
            this.errorMsg = 'Try again Later';
          }
        },
        (error) => {
          this.errorMsg = error;
        }
      );
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
