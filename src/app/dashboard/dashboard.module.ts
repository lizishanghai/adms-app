import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NgSemanticModule } from 'ng-semantic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from '../material';

@NgModule({
  imports: [
    CommonModule,
    NgSemanticModule,
    DashboardRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  declarations: [DashboardHomeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardModule { }
