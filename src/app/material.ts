import {MatButtonModule, MatCheckboxModule,} from '@angular/material';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  imports: [
      MatButtonModule,
     MatCheckboxModule,
     MatToolbarModule,
     MatSidenavModule,
     MatIconModule
    ],
  exports: [
      MatButtonModule, 
      MatCheckboxModule,
      MatToolbarModule,
      MatSidenavModule,
      MatIconModule
    ],
})
export class MaterialModule { }