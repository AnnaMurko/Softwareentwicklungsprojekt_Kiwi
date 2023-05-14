import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Attendant } from './Attendant';

@Injectable({
  providedIn: 'root',
})
export class AttendantService {
  private loggedInAttendant!: Attendant;

  constructor(private http: HttpClient) {}

  setLoggedInAttendant(attendant: Attendant) {
    this.loggedInAttendant = attendant;
  }

  getLoggedInAttendant(): Attendant {
    return this.loggedInAttendant;
  }


}
