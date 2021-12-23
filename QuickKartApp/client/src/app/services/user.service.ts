import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, throwError } from 'rxjs';
import { IUser } from '../interfaces/IUser';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl = 'http://localhost:11990';
  $user = new BehaviorSubject('');

  constructor(private http: HttpClient) {}

  validateCredentials(id: string, password: string): Observable<string> {
    let userObj: IUser;
    userObj = {
      emailId: id,
      userPassword: password,
      gender: null,
      roleId: null,
      dateOfBirth: null,
      address: null,
    };
    return this.http
      .post<string>(this.baseUrl + '/api/user/ValidateUserCredentials', userObj)
      .pipe(
        map((responseLoginStatus) => {
          let msg = '';
          if (responseLoginStatus.toLowerCase() != 'invalid credentials') {
            msg = 'Login Successful';
            sessionStorage.setItem('userName', userObj.emailId);
            sessionStorage.setItem('userRole', responseLoginStatus);
            this.$user.next(userObj.emailId);
          } else {
            msg = responseLoginStatus + '. Try again with valid credentials.';
          }
          return msg;
        }),
        catchError(this.errorHandler)
      );
  }

  logout() {
    sessionStorage.removeItem('userName');
    sessionStorage.removeItem('userRole');
    this.$user.next('');
  }

  errorHandler(error: HttpErrorResponse) {
    console.error(error);
    return throwError(error.message || 'Server Error');
  }
}
