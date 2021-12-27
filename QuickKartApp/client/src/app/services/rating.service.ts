import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { IRating } from '../interfaces/IRating';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class RatingService {
  baseUrl = 'http://localhost:11990';

  constructor(private userService: UserService, private http: HttpClient) {}

  displayAllReviewDetailsByEmailId() {
    const emailId = this.userService.getUser();
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

  insertRating(rating: IRating) {
    return this.http
      .post<boolean>(this.baseUrl + '/api/rating/InsertRating', rating)
      .pipe(catchError(this.errorHandler));
  }

  updateReviewComments(rating: IRating) {
    return this.http
      .put<boolean>(this.baseUrl + '/api/Rating/UpdateReviewComments', rating)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'Server Error');
  }
}
