import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/component/login.component';
import { RegisterComponent } from './modules/auth/component/register.component';
import { DashboardComponent } from './modules/dashboard/component/dashboard.component';
import { GalleryComponent } from './modules/gallery/component/gallery.component';
import { AuthenticationGuard } from './shared/guards/authentication.guard';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    canActivate: [AuthenticationGuard],
    children: [
      {
        path: 'gallery',
        component: GalleryComponent,
      },
      {
        path: '',
        component: DashboardComponent,
      },
    ]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
