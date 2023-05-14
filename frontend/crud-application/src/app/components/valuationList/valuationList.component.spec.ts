import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuationListComponent } from './valuationList.component';

describe('AddUserComponent', () => {
  let component: ValuationListComponent;
  let fixture: ComponentFixture<ValuationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValuationListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValuationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
