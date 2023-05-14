export class Attendant {
  name: string;
  password: string;
  _id: number;
  admin: boolean;

  constructor(name: string, password: string, id: number, admin: boolean) {
    this.name = name;
    this.password = password;
    this._id = id;
    this.admin = admin;
  }

  get id(): number {
    return this._id;
  }
}