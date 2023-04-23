import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KinderComponent } from './kinder.component';

describe('AddUserComponent', () => {
  let component: KinderComponent;
  let fixture: ComponentFixture<KinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KinderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
