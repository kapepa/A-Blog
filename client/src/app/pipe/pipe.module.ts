import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ParagraphPipe} from "./paragraph.pipe";
import { FirstUpPipe } from './first-up.pipe';



@NgModule({
  declarations: [
    ParagraphPipe,
    FirstUpPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ParagraphPipe,
    FirstUpPipe,
  ],
})
export class PipeModule { }
