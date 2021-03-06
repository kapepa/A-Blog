import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutAdminComponent } from './layout-admin.component';
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "../../login/login.component";
import { DashboardComponent } from "../../dashboard/dashboard.component";
import { CreateComponent } from "../../create/create.component";
import { EditComponent } from "../../edit/edit.component";
import { NavAdminModule } from "../nav-admin/nav-admin.module";
import { AccessAdminGuard } from "../../guard/access-admin.guard";
import { AlertModule } from "../alert/alert.module";

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AccessAdminGuard] },
  { path: 'create', component: CreateComponent, canActivate: [AccessAdminGuard] },
  { path: ':id/edit', component: EditComponent, canActivate: [AccessAdminGuard] },
]

@NgModule({
  declarations: [
    LayoutAdminComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    NavAdminModule,
    AlertModule,
  ],
  exports: [RouterModule],
  providers: [AccessAdminGuard]
})
export class LayoutAdminModule { }
