import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAttendantsComponent } from './allAttendants.component';

describe('AddUserComponent', () => {
  let component: AllAttendantsComponent;
  let fixture: ComponentFixture<AllAttendantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllAttendantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllAttendantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
