import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BewertungComponent } from './bewertung.component';

describe('AddUserComponent', () => {
  let component: BewertungComponent;
  let fixture: ComponentFixture<BewertungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BewertungComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BewertungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
