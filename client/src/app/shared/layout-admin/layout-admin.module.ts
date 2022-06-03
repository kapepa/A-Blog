import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutAdminComponent } from './layout-admin.component';
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "../../login/login.component";

const routes: Routes = [
  {
    path: '', component: LayoutAdminComponent, children: [
      { path: 'login', component: LoginComponent}
    ]
  }
]

@NgModule({
  declarations: [
    LayoutAdminComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
  ],
  exports: [RouterModule]
})
export class LayoutAdminModule { }
