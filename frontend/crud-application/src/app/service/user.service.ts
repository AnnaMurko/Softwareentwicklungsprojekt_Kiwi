import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private loggedInUser!: User;

  constructor(private http: HttpClient) {}

  setLoggedInUser(user: User) {
    this.loggedInUser = user;
  }

  getLoggedInUser(): User {
    return this.loggedInUser;
  }


}
