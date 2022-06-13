import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { FormDynamicModule } from "../shared/form-dynamic/form-dynamic.module";
import { PostShortModule } from "../shared/post-short/post-short.module";
import { SearchModule } from "../shared/search/search.module";



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    FormDynamicModule,
    PostShortModule,
    SearchModule,
  ]
})
export class DashboardModule { }
