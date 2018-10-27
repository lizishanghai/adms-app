import { CarListComponent } from './car-list/car-list.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { CarCreateComponent } from './car-create/car-create.component';

const carsRoutes: Routes = [
  { path: 'cars', component: CarListComponent },
  { path: 'car/create', component: CarCreateComponent },
  { path: 'car/:id', component: CarDetailComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(carsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CarsRoutingModule { }
