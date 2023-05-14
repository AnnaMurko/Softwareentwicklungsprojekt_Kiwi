import { Child } from './Child';

export class Valuation {
  id: number;
  values: string[];
  childId: number;
  child: Child;
  createdAt: string;

  constructor(id: number, values: string[], childId: number, child: Child, createdAt: string) {
    this.id = id;
    this.values = values;
    this.childId = childId;
    this.child = child;
    this.createdAt = createdAt;
  }

  getId(): number {
    return this.id;
  }

  setId(id: number): void {
    this.id = id;
  }

  getValues(): string[] {
    return this.values;
  }

  setValues(values: string[]): void {
    this.values = values;
  }

  getChildId(): number {
    return this.childId;
  }

  setChildId(childId: number): void {
    this.childId = childId;
  }

  getChild(): Child {
    return this.child;
  }

  setChild(child: Child): void {
    this.child = child;
  }

  getCreatedAt(): string {
    return this.createdAt;
  }

  setCreatedAt(createdAt: string): void {
    this.createdAt = createdAt;
  }

  toString(): string {
    return `AriaValues{id=${this.id}, values=${this.values}, childId=${this.childId}, child=${this.child}, createdAt=${this.createdAt}}`;
  }
}
