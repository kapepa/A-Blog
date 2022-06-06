import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import { RouterModule } from "@angular/router";
import { PipeModule } from "../../pipe/pipe.module";



@NgModule({
  declarations: [
    ButtonComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PipeModule,
  ],
  exports: [
    ButtonComponent
  ]
})
export class ButtonModule { }
