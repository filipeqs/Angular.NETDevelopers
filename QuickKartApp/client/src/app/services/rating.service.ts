import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { IRating } from '../interfaces/IRating';

@Injectable({
  providedIn: 'root',
})
export class RatingService {
  baseUrl = 'http://localhost:11990';

  constructor(private http: HttpClient) {}

  displayAllReviewDetailsByEmailId() {
    const emailId = 'Albert@gmail.com';
    return this.http
      .get<IRating[]>(
        this.baseUrl +
          '/api/Rating/DisplayAllReviewDetailsByEmailId?emailId=' +
          emailId
      )
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(error.message || 'Server Error');
        })
      );
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'Server Error');
  }
}
