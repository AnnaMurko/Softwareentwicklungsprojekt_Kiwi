import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAttendantComponent } from './updateAttendant.component';

describe('AddUserComponent', () => {
  let component: UpdateAttendantComponent;
  let fixture: ComponentFixture<UpdateAttendantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAttendantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAttendantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
