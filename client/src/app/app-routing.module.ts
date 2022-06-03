import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import { LayoutComponent } from "./shared/layout/layout.component";
import { PageHomeComponent } from "./page-home/page-home.component";
import { PagePostComponent } from "./page-post/page-post.component";
import { LayoutAdminComponent } from "./shared/layout-admin/layout-admin.component";
import { PageErrorComponent } from "./page-error/page-error.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: PageHomeComponent },
      { path: 'post/:id', component: PagePostComponent }
    ]
  },{
    path: 'admin',
    component: LayoutAdminComponent,
    loadChildren: () => import('./shared/layout-admin/layout-admin.module').then(mod => mod.LayoutAdminModule),
  },
  { path: '', redirectTo: '/', pathMatch: 'full'},
  { path: '**', component: PageErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
