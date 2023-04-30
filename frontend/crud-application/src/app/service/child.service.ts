import { Injectable } from '@angular/core';
import {User} from "./User";
import {Child} from "./Child";

@Injectable({
  providedIn: 'root'
})
export class ChildService {

  private editChild!: Child;

  constructor() { }

  setEditChild(child: Child) {
    this.editChild = child;
  }

  getEditChild(): Child {
    return this.editChild;
  }

}
