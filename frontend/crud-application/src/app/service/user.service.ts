import { Injectable } from '@angular/core';
import {User} from "./User";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private loggedInUser!: User;

  constructor() { }

  setLoggedInUser(user: User) {
    this.loggedInUser = user;
  }

  getLoggedInUser(): User {
    return this.loggedInUser;
  }

}
