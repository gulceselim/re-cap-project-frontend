import { HomeComponent } from './pages/home/home.component';
import { AuthComponent } from './layouts/auth/auth.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./layouts/admin/admin.module').then((m) => m.AdminModule),
      },
    ],
  },
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./layouts/auth/auth.module').then((m) => m.AuthModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
