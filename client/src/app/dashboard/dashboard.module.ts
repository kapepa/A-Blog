import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { FormDynamicModule } from "../shared/form-dynamic/form-dynamic.module";
import { PostShortModule } from "../shared/post-short/post-short.module";



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    FormDynamicModule,
    PostShortModule
  ]
})
export class DashboardModule { }
