import {MatButtonModule, MatCheckboxModule,} from '@angular/material';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [
      MatButtonModule,
     MatCheckboxModule,
     MatToolbarModule,
     MatSidenavModule,
     MatIconModule,
     MatCardModule
    ],
  exports: [
      MatButtonModule, 
      MatCheckboxModule,
      MatToolbarModule,
      MatSidenavModule,
      MatIconModule,
      MatCardModule
    ],
})
export class MaterialModule { 
  
}