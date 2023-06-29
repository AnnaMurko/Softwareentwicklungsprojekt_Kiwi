export class Attendant {
  username: string;
  password: string;
  _id: number;
  admin: boolean;

  constructor(username: string, password: string, id: number, admin: boolean) {
    this.username = username;
    this.password = password;
    this._id = id;
    this.admin = admin;
  }

  get id(): number {
    return this._id;
  }
}