import { BrowserModule } from '@angular/platform-browser';
//importacion de las animaciones
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//importando material
import {MaterialModule} from "./material";
import { BarraNavComponent } from './barra-nav/barra-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { DestinosComponent } from './destinos/destinos.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { RecomendacionesComponent } from './recomendaciones/recomendaciones.component';
@NgModule({
  declarations: [
    AppComponent,
    BarraNavComponent,
    DestinosComponent,
    GaleriaComponent,
    RecomendacionesComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
