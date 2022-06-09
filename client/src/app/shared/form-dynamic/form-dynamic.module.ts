import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDynamicComponent } from './form-dynamic.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ButtonModule } from "../button/button.module";



@NgModule({
  declarations: [
    FormDynamicComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
  ],
  exports: [
    FormDynamicComponent
  ]
})
export class FormDynamicModule { }
