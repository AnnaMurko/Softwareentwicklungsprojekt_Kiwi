import {User} from "./User";

export class Child {
  id: number;
  name: string;
  user: User;
  userId: number;


  constructor(id: number, name: string, user: User, userId: number) {
    this.id = id;
    this.name = name;
    this.user = user;
    this.userId = userId;
  }
}