import { HttpClientModule } from '@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarListComponent } from './car-list/car-list.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { CarsRoutingModule } from './cars-routing.module';
import { MaterialModule } from '../material';

@NgModule({
  imports: [
    CommonModule,
    CarsRoutingModule,
    FormsModule,
    HttpClientModule,
    MaterialModule
  ],
  declarations: [
    CarListComponent,
    CarDetailComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CarsModule { }
