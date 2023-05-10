import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEducatorComponent } from './updateEducator.component';

describe('AddUserComponent', () => {
  let component: UpdateEducatorComponent;
  let fixture: ComponentFixture<UpdateEducatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEducatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateEducatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
