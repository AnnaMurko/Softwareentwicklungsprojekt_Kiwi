import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEducatorComponent } from './editEducator.component';

describe('AddUserComponent', () => {
  let component: EditEducatorComponent;
  let fixture: ComponentFixture<EditEducatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEducatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditEducatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
