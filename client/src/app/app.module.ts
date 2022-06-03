import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from "./shared/layout/layout.module";
import { ButtonModule } from "./shared/button/button.module";
import { PageHomeModule } from "./page-home/page-home.module";
import { LayoutAdminModule } from "./shared/layout-admin/layout-admin.module";
import { LoginModule } from "./login/login.module";
import { EditModule } from "./edit/edit.module";
import { DashboardModule } from "./dashboard/dashboard.module";
import { CreateModule } from "./create/create.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    LayoutAdminModule,
    ButtonModule,
    PageHomeModule,
    LoginModule,
    EditModule,
    DashboardModule,
    CreateModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
