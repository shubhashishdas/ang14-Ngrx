import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FavoriteComponent } from './favorite/favorite.component';

const routes: Routes = [
  {
    path: '',
    title: 'Web Series',
    component: FavoriteComponent
  }
]

@NgModule({
  declarations: [
    FavoriteComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FavoriteModule { }
