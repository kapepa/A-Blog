import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './edit.component';
import { FormDynamicModule } from "../shared/form-dynamic/form-dynamic.module";
import { LoaderModule } from "../shared/loader/loader.module";



@NgModule({
  declarations: [
    EditComponent
  ],
  imports: [
    CommonModule,
    FormDynamicModule,
    LoaderModule,
  ]
})
export class EditModule { }
