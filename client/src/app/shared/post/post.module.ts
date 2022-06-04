import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { ButtonModule } from "../button/button.module";



@NgModule({
  declarations: [
    PostComponent
  ],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports: [
    PostComponent
  ]
})
export class PostModule { }
