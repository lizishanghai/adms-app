import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LayoutComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    LayoutComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class UiModule { }
