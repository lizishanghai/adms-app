import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarListComponent } from './car-list/car-list.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { CarsRoutingModule } from './cars-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CarsRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    CarListComponent,
    CarDetailComponent
  ]
})
export class CarsModule { }
