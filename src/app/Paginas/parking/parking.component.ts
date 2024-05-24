import { Component } from '@angular/core';
import { HeaderComponent } from "../../Componentes/header/header.component";

@Component({
    selector: 'app-parking',
    standalone: true,
    templateUrl: './parking.component.html',
    styleUrl: './parking.component.css',
    imports: [HeaderComponent]
})
export class ParkingComponent {
    active: boolean = true;
    planta: string = '';
    correo: string = '';
    nombre: string = '';
    dia: string = '';
    fechaInicio: string = '';
    fechaFin: string = '';
  
    get message() {
      return this.active ? 'encendido' : 'apagado';
    }
  
    handleClick() {
      this.active = !this.active;
    }
  
    reserveSpace() {
    
      console.log('Reserving parking space...');
    }
}
