import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './modules/gallery/component/gallery.component';
import { LoginComponent } from './modules/login/components/login.component';
import { RegisterComponent } from './modules/register/component/register.component';

const routes: Routes = [
  {
    path: 'gallery',
    component: GalleryComponent,
  },
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
    pathMatch: 'full',
    redirectTo: '/login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
