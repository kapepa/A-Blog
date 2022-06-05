import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagePostComponent } from './page-post.component';
import { RouterModule } from "@angular/router";
import {PipeModule} from "../pipe/pipe.module";



@NgModule({
  declarations: [
    PagePostComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    PipeModule,
  ]
})
export class PagePostModule { }
