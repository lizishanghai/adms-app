import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesRoutingModule } from './sales-routing.module';
import { SalesListComponent } from './sales-list/sales-list.component';
import { SalesDetailComponent } from './sales-detail/sales-detail.component';
import { FormsModule } from '@angular/forms';
import { SalesEditComponent } from './sales-edit/sales-edit.component';

@NgModule({
  imports: [
    CommonModule,
    SalesRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [SalesListComponent, SalesDetailComponent, SalesEditComponent]
})
export class SalesModule { }
