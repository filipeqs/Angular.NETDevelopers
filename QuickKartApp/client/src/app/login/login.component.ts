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
          this.msg = responseLoginStatus;
          if (responseLoginStatus == 'Login Successful') {
            this.router.navigate(['/home']);
          }
        },
        (responseLoginError) => {
          this.errorMsg = responseLoginError;
        },
        () => console.log('SubmitLoginForm method executed successfully')
      );
  }
}
