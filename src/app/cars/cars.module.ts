import { HttpClientModule } from '@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarListComponent } from './car-list/car-list.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { CarsRoutingModule } from './cars-routing.module';
import { MaterialModule } from '../material';
import { CarCreateComponent } from './car-create/car-create.component';
import { CarFormComponent } from './car-form/car-form.component';

@NgModule({
  imports: [
    CommonModule,
    CarsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule
  ],
  declarations: [
    CarListComponent,
    CarDetailComponent,
    CarCreateComponent,
    CarFormComponent
  ],
  schemas: []
})
export class CarsModule { }
