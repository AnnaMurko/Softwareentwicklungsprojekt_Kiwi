import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuationResultComponent } from './valuationResult.component';

describe('AddUserComponent', () => {
  let component: ValuationResultComponent;
  let fixture: ComponentFixture<ValuationResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValuationResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValuationResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
