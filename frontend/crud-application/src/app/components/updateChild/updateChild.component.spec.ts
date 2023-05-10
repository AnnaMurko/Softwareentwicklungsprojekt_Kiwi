import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateChildComponent } from './updateChild.component';

describe('AddUserComponent', () => {
  let component: UpdateChildComponent;
  let fixture: ComponentFixture<UpdateChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
