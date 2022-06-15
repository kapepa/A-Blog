import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert.component';
import { PipeModule } from "../../pipe/pipe.module";



@NgModule({
  declarations: [
    AlertComponent
  ],
  imports: [
    CommonModule,
    PipeModule,
  ],
  exports: [
    AlertComponent,
  ]
})
export class AlertModule { }
