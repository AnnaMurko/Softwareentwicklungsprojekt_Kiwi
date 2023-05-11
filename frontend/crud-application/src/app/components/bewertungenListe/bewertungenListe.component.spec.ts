import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BewertungenListeComponent } from './bewertungenListe.component';

describe('AddUserComponent', () => {
  let component: BewertungenListeComponent;
  let fixture: ComponentFixture<BewertungenListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BewertungenListeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BewertungenListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
