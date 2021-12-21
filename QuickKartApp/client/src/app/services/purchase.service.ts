import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { IPurchaseDetails } from '../interfaces/IPurchaseDetails';

@Injectable({
  providedIn: 'root',
})
export class PurchaseService {
  baseUrl = 'http://localhost:11990';

  constructor(private http: HttpClient) {}

  getPurchaseDetails() {
    const emailId = 'Franken@gmail.com';
    return this.http
      .get<IPurchaseDetails[]>(
        this.baseUrl +
          '/api/Purchase/GetPurchaseDetailsByEmailId?emailId=' +
          emailId
      )
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    console.log(error);
    return throwError(error.message || 'Server Error');
  }
}
