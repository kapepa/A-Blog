import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostShortComponent } from './post-short.component';
import { PipeModule } from "../../pipe/pipe.module";
import { ButtonModule } from "../button/button.module";



@NgModule({
  declarations: [
    PostShortComponent
  ],
  imports: [
    CommonModule,
    PipeModule,
    ButtonModule,
  ],
  exports: [
    PostShortComponent
  ]
})
export class PostShortModule { }
