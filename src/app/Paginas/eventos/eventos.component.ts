import { Component } from '@angular/core';
import { HeaderComponent } from "../../Componentes/header/header.component";
import { TarjetaEventosComponent } from "../../Componentes/tarjeta-eventos/tarjeta-eventos.component";

@Component({
    selector: 'app-eventos',
    standalone: true,
    templateUrl: './eventos.component.html',
    styleUrl: './eventos.component.css',
    imports: [HeaderComponent, TarjetaEventosComponent]
})
export class EventosComponent {

}
