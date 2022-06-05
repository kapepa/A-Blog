import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ParagraphPipe} from "./paragraph.pipe";



@NgModule({
  declarations: [
    ParagraphPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ParagraphPipe,
  ],
})
export class PipeModule { }
