import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { IUser } from '../interfaces/IUser';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl = 'http://localhost:11990';
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
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    console.error(error);
    return throwError(error.message || 'Server Error');
  }
}
