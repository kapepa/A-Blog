import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHomeComponent } from './page-home.component';
import {PostModule} from "../shared/post/post.module";



@NgModule({
  declarations: [
    PageHomeComponent,
  ],
  imports: [
    CommonModule,
    PostModule,
  ]
})
export class PageHomeModule { }
