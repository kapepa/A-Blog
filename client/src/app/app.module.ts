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
import { PagePostModule } from "./page-post/page-post.module";
import { PipeModule } from "./pipe/pipe.module";
import { NavAdminModule } from "./shared/nav-admin/nav-admin.module";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { CookieService } from 'ngx-cookie-service';
import { AuthInterceptor } from "./interceptor/auth-interceptor";
import { FormDynamicModule } from "./shared/form-dynamic/form-dynamic.module";
import { PostShortModule } from "./shared/post-short/post-short.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    LayoutAdminModule,
    ButtonModule,
    PageHomeModule,
    PagePostModule,
    LoginModule,
    EditModule,
    DashboardModule,
    CreateModule,
    PipeModule,
    NavAdminModule,
    HttpClientModule,
    FormDynamicModule,
    PostShortModule,
  ],
  providers: [
    CookieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
