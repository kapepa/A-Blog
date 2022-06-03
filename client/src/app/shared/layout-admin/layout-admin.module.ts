import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutAdminComponent } from './layout-admin.component';
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "../../login/login.component";
import { DashboardComponent } from "../../dashboard/dashboard.component";
import { CreateComponent } from "../../create/create.component";
import { EditComponent } from "../../edit/edit.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'create', component: CreateComponent },
  { path: ':id/edit', component: EditComponent},
]

@NgModule({
  declarations: [
    LayoutAdminComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
  ],
  exports: [RouterModule]
})
export class LayoutAdminModule { }
