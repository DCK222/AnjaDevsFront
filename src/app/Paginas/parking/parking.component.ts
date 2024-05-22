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

}
