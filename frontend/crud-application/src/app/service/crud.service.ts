import { Injectable } from '@angular/core';
import { Attendant } from './Attendant';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import {Child} from "./Child";
import {Valuation} from "./Valuation";

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
    let API_URL = `${this.REST_API}/children`;
    return this.httpClient
        .post(API_URL, data)
        .pipe(catchError(this.handleError));
  }

  addAttendant(data: Attendant): Observable<any> {
    let API_URL = `${this.REST_API}/attendants`;
    return this.httpClient
        .post(API_URL, data)
        .pipe(catchError(this.handleError));
  }
  // Get all objects
  getChildren():Observable<Child[]> {
    return this.httpClient.get<Child[]>(`${this.REST_API}/children`);
  }

  // Get all objects
  getAttendants():Observable<Attendant[]> {
    return this.httpClient.get<Attendant[]>(`${this.REST_API}/attendants`);
  }
  // Get single object
  getChild(id: any): Observable<Child> {
    let API_URL = `${this.REST_API}/children/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders }).pipe(
        map((res: any) => {
          return res || {};
        }),
        catchError(this.handleError)
    );
  }

  // Update
  updateChild(id: any, data: any): Observable<any> {
    let API_URL = `${this.REST_API}/children/${id}`;
    return this.httpClient
        .put(API_URL, data, { headers: this.httpHeaders })
        .pipe(catchError(this.handleError));
  }

  getValuationsByChildId(id: any): Observable<Valuation[]> {
    let API_URL = `${this.REST_API}/children/${id}/valuations`;
    return this.httpClient.get<Valuation[]>(API_URL, { headers: this.httpHeaders }).pipe(
        catchError(this.handleError)
    );
  }

  deleteBewertung(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/valuations/${id}`;
    return this.httpClient.delete(API_URL, { headers: this.httpHeaders }).pipe(
        catchError(this.handleError)
    );
  }


  updateEducator(id: any, data: any): Observable<any> {
    let API_URL = `${this.REST_API}/attendants/${id}`;
    return this.httpClient
        .put(API_URL, data, { headers: this.httpHeaders })
        .pipe(catchError(this.handleError));
  }


  // Delete
  deleteChild(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/children/${id}`;

    let childs = this.getChildren();

    return this.httpClient
        .delete(API_URL, { headers: this.httpHeaders })
        .pipe(catchError(this.handleError));
  }

  deleteAttendant(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/attendants/${id}`;
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

  addValuations(data: Valuation): Observable<any> {
    let API_URL = `${this.REST_API}/valuations`;
    return this.httpClient
        .post(API_URL, data)
        .pipe(catchError(this.handleError));
  }

}