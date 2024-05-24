import { Component } from '@angular/core';
import { SigninComponent } from "../../Componentes/signin/signin.component";

@Component({
    selector: 'app-prueba',
    standalone: true,
    templateUrl: './prueba.component.html',
    styleUrl: './prueba.component.css',
    imports: [SigninComponent]
})
export class PruebaComponent {

}
