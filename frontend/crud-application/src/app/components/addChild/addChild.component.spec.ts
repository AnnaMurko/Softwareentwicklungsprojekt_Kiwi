import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChildComponent } from './addChild.component';

describe('AddUserComponent', () => {
  let component: AddChildComponent;
  let fixture: ComponentFixture<AddChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
