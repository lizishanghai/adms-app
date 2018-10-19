import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SalesListComponent } from './sales-list/sales-list.component';
import { SalesDetailComponent } from './sales-detail/sales-detail.component';


const salesRoutes: Routes = [
  { path: 'sales', component: SalesListComponent },
  { path: 'sales/:id', component: SalesDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(salesRoutes)
  ],
  exports: [
    RouterModule
  ]

})
export class SalesRoutingModule { }
