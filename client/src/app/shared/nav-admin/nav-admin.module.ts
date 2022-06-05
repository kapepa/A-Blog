import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavAdminComponent } from './nav-admin.component';
import { RouterModule } from "@angular/router";
import { PipeModule } from "../../pipe/pipe.module";



@NgModule({
  declarations: [
    NavAdminComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PipeModule,
  ],
  exports: [
    NavAdminComponent
  ]
})
export class NavAdminModule { }
