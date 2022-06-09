import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { FormDynamicModule } from "../shared/form-dynamic/form-dynamic.module";



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    FormDynamicModule
  ]
})
export class DashboardModule { }
