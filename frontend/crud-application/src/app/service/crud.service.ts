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
import {AriaValues} from "./AriaValues";

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

  addUser(data: User): Observable<any> {
    let API_URL = `${this.REST_API}/users`;
    return this.httpClient
        .post(API_URL, data)
        .pipe(catchError(this.handleError));
  }
  // Get all objects
  getChilds():Observable<Child[]> {
    return this.httpClient.get<Child[]>(`${this.REST_API}/childs`);
  }

  // Get all objects
  getUsers():Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.REST_API}/users`);
  }
  // Get single object
  getChild(id: any): Observable<Child> {
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

  getBewertungenByChildId(id: any): Observable<AriaValues[]> {
    let API_URL = `${this.REST_API}/childs/${id}/bewertungen`;
    return this.httpClient.get<AriaValues[]>(API_URL, { headers: this.httpHeaders }).pipe(
        catchError(this.handleError)
    );
  }

  deleteBewertung(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/ariaValues/${id}`;
    return this.httpClient.delete(API_URL, { headers: this.httpHeaders }).pipe(
        catchError(this.handleError)
    );
  }


  updateEducator(id: any, data: any): Observable<any> {
    let API_URL = `${this.REST_API}/users/${id}`;
    return this.httpClient
        .put(API_URL, data, { headers: this.httpHeaders })
        .pipe(catchError(this.handleError));
  }


  // Delete
  deleteChild(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/childs/${id}`;

    let childs = this.getChilds();

    return this.httpClient
        .delete(API_URL, { headers: this.httpHeaders })
        .pipe(catchError(this.handleError));
  }

  deleteUser(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/users/${id}`;
    return this.httpClient
        .delete(API_URL, { headers: this.httpHeaders })
        .pipe(catchError(this.handleError));
  }

  // Error
  private handleError(error: any) {
    let errorMessage = 'Unbekannter Fehler aufgetreten.';
    if (error.error instanceof ErrorEvent) {
      // Clientseitiger Fehler
      errorMessage = `Fehler: ${error.error.message}`;
    } else {
      // Serverseitiger Fehler
      errorMessage = `Fehlercode: ${error.status}, Fehlermeldung: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

  addAriaValue(data: AriaValues): Observable<any> {
    let API_URL = `${this.REST_API}/ariaValues`;
    return this.httpClient
        .post(API_URL, data)
        .pipe(catchError(this.handleError));
  }

}