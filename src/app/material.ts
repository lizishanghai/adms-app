import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatSidenavModule,
  MatMenuModule,
  MatListModule,
  MatGridListModule,
  MatToolbarModule,
  MatIconModule,
  MatTabsModule,
  MatButtonToggleModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatRadioModule
} from '@angular/material';

@NgModule({
  imports: [MatButtonModule,
            MatCheckboxModule,
            MatSidenavModule,
            MatMenuModule,
            MatListModule,
            MatGridListModule,
            MatToolbarModule,
            MatIconModule,
            MatTabsModule,
            MatButtonToggleModule,
            MatInputModule,
            MatFormFieldModule,
            MatSelectModule,
            MatDatepickerModule,
            MatNativeDateModule,
            MatRadioModule
          ],
  exports: [
            MatButtonModule,
            MatCheckboxModule,
            MatSidenavModule,
            MatMenuModule,
            MatListModule,
            MatGridListModule,
            MatToolbarModule,
            MatIconModule,
            MatTabsModule,
            MatButtonToggleModule,
            MatInputModule,
            MatFormFieldModule,
            MatSelectModule,
            MatDatepickerModule,
            MatNativeDateModule,
            MatRadioModule
          ],
})
export class MaterialModule { }
