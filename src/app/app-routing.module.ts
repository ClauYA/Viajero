import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DestinosComponent } from './destinos/destinos.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { RecomendacionesComponent } from './recomendaciones/recomendaciones.component';
const routes: Routes = [
 {  path: 'destinos', component: DestinosComponent },
 {  path: 'galeria', component: GaleriaComponent },
 {  path: 'recomendaciones', component: RecomendacionesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
