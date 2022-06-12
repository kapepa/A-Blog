import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create.component';
import { FormDynamicModule } from "../shared/form-dynamic/form-dynamic.module";



@NgModule({
  declarations: [
    CreateComponent
  ],
  imports: [
    CommonModule,
    FormDynamicModule
  ]
})
export class CreateModule { }
