import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAttendantComponent } from './addAttendant.component';

describe('AddUserComponent', () => {
  let component: AddAttendantComponent;
  let fixture: ComponentFixture<AddAttendantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAttendantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAttendantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
