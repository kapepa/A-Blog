import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagePostComponent } from './page-post.component';
import { RouterModule } from "@angular/router";
import { PipeModule } from "../pipe/pipe.module";
import { LoaderModule } from "../shared/loader/loader.module";
import { AngularEditorModule } from "@kolkov/angular-editor";



@NgModule({
  declarations: [
    PagePostComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    PipeModule,
    LoaderModule,
    AngularEditorModule,
  ]
})
export class PagePostModule { }
