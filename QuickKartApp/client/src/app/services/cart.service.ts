import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { ICartProduct } from '../interfaces/ICartProduct';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  baseUrl = 'http://localhost:11990';

  constructor(private http: HttpClient) {}

  getCartProducts() {
    const emailId = 'Albert@gmail.com';
    return this.http
      .get<ICartProduct[]>(
        this.baseUrl + '/api/User/GetCartProducts?emailId=' + emailId
      )
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    console.log(error);
    return throwError(error.message || 'Server Error');
  }
}
