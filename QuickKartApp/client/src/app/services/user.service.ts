import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, throwError } from 'rxjs';
import { ICart } from '../interfaces/ICart';
import { IUser } from '../interfaces/IUser';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl = 'http://localhost:11990';
  $user = new BehaviorSubject('');

  constructor(private http: HttpClient) {}

  setUser(user: string) {
    this.$user.next(user);
  }

  getUser() {
    return this.$user.getValue();
  }

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

  addProductToCart(productId: string, emailId: string): Observable<boolean> {
    var cartObj: ICart;
    cartObj = { productId, emailId, quantity: 1 };
    return this.http
      .post<boolean>(this.baseUrl + '/api/user/AddProductToCart', cartObj)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    console.error(error);
    return throwError(error.message || 'Server Error');
  }
}
