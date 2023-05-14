export class Child {
  id: number;
  name: string;
  birthday: Date;
  gender: string;
  attendantId: number | undefined;

  constructor(id: number, name: string, birthday: Date, gender: string, attendantId: number) {
    this.id = id;
    this.name = name;
    this.birthday = birthday;
    this.gender = gender;
    this.attendantId = attendantId;
  }
}
