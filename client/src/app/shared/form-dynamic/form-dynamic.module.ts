import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDynamicComponent } from './form-dynamic.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ButtonModule } from "../button/button.module";
import { AngularEditorModule } from '@kolkov/angular-editor';


@NgModule({
  declarations: [
    FormDynamicComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    AngularEditorModule,
  ],
  exports: [
    FormDynamicComponent
  ]
})
export class FormDynamicModule { }
