import { Component } from '@angular/core';
import { HeaderComponent } from "../../Componentes/header/header.component";

@Component({
    selector: 'app-inicio',
    standalone: true,
    templateUrl: './inicio.component.html',
    styleUrl: './inicio.component.css',
    imports: [HeaderComponent]
})
export class InicioComponent {

}
