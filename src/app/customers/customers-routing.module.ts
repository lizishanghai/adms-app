import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';

const customersRoutes: Routes = [
  { path: 'customers', component: CustomerListComponent },
  { path: 'customer/:id', component: CustomerDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(customersRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CustomersRoutingModule { }
