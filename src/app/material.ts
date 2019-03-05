import {MatButtonModule, MatCheckboxModule,} from '@angular/material';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {  MatInputModule } from '@angular/material';
import {MatDividerModule} from '@angular/material/divider';
import {MatTabsModule} from '@angular/material/tabs';
import {MatRippleModule} from '@angular/material/core';
@NgModule({
  imports: [
      MatButtonModule,
     MatCheckboxModule,
     MatToolbarModule,
     MatSidenavModule,
     MatIconModule,
     MatCardModule,
     MatAutocompleteModule,
     MatFormFieldModule,
     MatExpansionModule,
     MatDatepickerModule,
     MatInputModule,
     MatDividerModule,
     MatTabsModule,
     MatRippleModule
    ],
  exports: [
      MatButtonModule, 
      MatCheckboxModule,
      MatToolbarModule,
      MatSidenavModule,
      MatIconModule,
      MatCardModule,
      MatAutocompleteModule,
      MatFormFieldModule,
      MatExpansionModule,
      MatDatepickerModule,
      MatInputModule,
      MatDividerModule,
      MatTabsModule,
      MatRippleModule
    ],
})
export class MaterialModule { 
  
}