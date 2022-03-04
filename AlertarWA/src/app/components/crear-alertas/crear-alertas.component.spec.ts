import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearAlertasComponent } from './crear-alertas.component';

describe('CrearAlertasComponent', () => {
  let component: CrearAlertasComponent;
  let fixture: ComponentFixture<CrearAlertasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearAlertasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearAlertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
