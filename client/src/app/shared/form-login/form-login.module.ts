import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormLoginComponent } from './form-login.component';
import { InputModule } from "../input/input.module";
import { PipeModule } from "../../pipe/pipe.module";
import { ButtonModule } from "../button/button.module";
import { ReactiveFormsModule } from "@angular/forms";



@NgModule({
  declarations: [
    FormLoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputModule,
    PipeModule,
    ButtonModule,
  ],
  exports: [
    FormLoginComponent
  ],
})
export class FormLoginModule { }
