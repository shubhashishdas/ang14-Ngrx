import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from 'src/app/shared/details/detail.component';
import { MovieComponent } from './movie/movie.component';

const routes: Routes = [
  {
    path: '',
    title: 'Movies',
    component: MovieComponent
  },
  {
    path:':id',
    title: 'Details',
    component: DetailComponent
  }
]

@NgModule({
  declarations: [
    MovieComponent,
    // DetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MovieModule { }
