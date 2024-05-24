import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoEventoTarjetaComponent } from './info-evento-tarjeta.component';

describe('InfoEventoTarjetaComponent', () => {
  let component: InfoEventoTarjetaComponent;
  let fixture: ComponentFixture<InfoEventoTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoEventoTarjetaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoEventoTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
