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
@NgModule({
  declarations: [
    AppComponent,
    BarraNavComponent
    
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
