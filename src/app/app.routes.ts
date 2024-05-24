import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { miguardiaGuard } from './_servicios/miguardia.guard';
import { InicioComponent } from './Paginas/inicio/inicio.component';
import { ParkingComponent } from './Paginas/parking/parking.component';
import { PlanosComponent } from './Paginas/planos/planos.component';
import { EventosComponent } from './Paginas/eventos/eventos.component';
import { PruebaComponent } from './Paginas/prueba/prueba.component';

export const routes: Routes = [
    {"path":"", component:InicioComponent, pathMatch:"full"},
    {"path":"parking", component:ParkingComponent},
    {"path":"planos", component:PlanosComponent},
    {"path":"eventos", component:EventosComponent},
    {"path":"prueba", component:PruebaComponent},
    {"path":"contenido",component:ContenidoComponent,canActivate: [miguardiaGuard]}
    // {
    //     path: '', title: 'Home Page', component:MainInicioComponent,
    // },
];
