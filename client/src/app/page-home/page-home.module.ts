import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHomeComponent } from './page-home.component';
import { PostModule } from "../shared/post/post.module";
import { LoaderModule } from "../shared/loader/loader.module";



@NgModule({
  declarations: [
    PageHomeComponent,
  ],
  imports: [
    CommonModule,
    PostModule,
    LoaderModule,
  ]
})
export class PageHomeModule { }
