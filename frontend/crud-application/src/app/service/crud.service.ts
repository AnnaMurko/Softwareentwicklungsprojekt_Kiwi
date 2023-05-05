import { Injectable } from '@angular/core';
import { User } from './User';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import {Child} from "./Child";

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  // Node/Express API
  REST_API: string = 'http://localhost:8080/api/v1';


  // Http Header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) {}

  // Add
  addChild(data: Child): Observable<any> {
    let API_URL = `${this.REST_API}/childs`;
    return this.httpClient
        .post(API_URL, data)
        .pipe(catchError(this.handleError));
  }

  // Get all objects
  GetChilds() {
    return this.httpClient.get(`${this.REST_API}/childs`);
  }

  // Get single object
  GetChild(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/childs/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders }).pipe(
        map((res: any) => {
          return res || {};
        }),
        catchError(this.handleError)
    );
  }

  // Update
  updateChild(id: any, data: any): Observable<any> {
    let API_URL = `${this.REST_API}/childs/${id}`;
    return this.httpClient
        .put(API_URL, data, { headers: this.httpHeaders })
        .pipe(catchError(this.handleError));
  }

  // Delete
  deleteChild(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/childs/${id}`;
    return this.httpClient
        .delete(API_URL, { headers: this.httpHeaders })
        .pipe(catchError(this.handleError));
  }

  // Error
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      errorMessage;
    });
  }
}