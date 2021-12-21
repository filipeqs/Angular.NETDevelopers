import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { ICategory } from 'src/app/interfaces/Category';
import { IProduct } from 'src/app/interfaces/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  baseUrl = 'http://localhost:11990';
  products: IProduct[];
  categories: ICategory[];

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http
      .get<IProduct[]>(this.baseUrl + '/api/Product/GetProducts')
      .pipe(catchError(this.errorHandler));
  }

  getProductCategories() {
    return this.http
      .get<ICategory[]>(this.baseUrl + '/api/Category/GetCategories')
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    console.log(error);
    return throwError(error.message || 'Server Error');
  }
}
