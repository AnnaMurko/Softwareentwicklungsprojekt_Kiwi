export class Child {
  id: number;
  firstName: string;
  lastName: string;
  note: string;
  birthday: Date;
  gender: string;
  attendantId: number | undefined;

  constructor(id: number, firstName: string,lastName: string, birthday: Date, gender: string, note: string,attendantId: number) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = birthday;
    this.gender = gender;
    this.note=note;
    this.attendantId = attendantId;
  }
}
