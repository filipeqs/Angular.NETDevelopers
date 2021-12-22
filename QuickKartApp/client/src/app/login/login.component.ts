import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  status: string;
  errorMsg: string;
  msg: string;
  showDiv: boolean = false;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  submitLoginForm(form: NgForm) {
    this.userService
      .validateCredentials(form.value.email, form.value.password)
      .subscribe(
        (responseLoginStatus) => {
          this.status = responseLoginStatus;
          this.showDiv = true;
          if (this.status.toLowerCase() != 'invalid credentials') {
            this.msg = 'Login Successful';
            sessionStorage.setItem('userName', form.value.email);
            sessionStorage.setItem('userRole', this.status);
            this.router.navigate(['/home']);
          } else {
            this.msg = this.status + '. Try again with valid credentials.';
          }
        },
        (responseLoginError) => {
          this.errorMsg = responseLoginError;
        },
        () => console.log('SubmitLoginForm method executed successfully')
      );
  }
}
