import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WebSeriesDetailComponent } from './web-series-detail/web-series-detail.component';
import { WebSeriesComponent } from './web-series/web-series.component';

const routes: Routes = [
  {
    path: '',
    title: 'Web Series',
    component: WebSeriesComponent
  },
  {
    path:':id',
    title: 'Details',
    component: WebSeriesDetailComponent
  }
]

@NgModule({
  declarations: [
    WebSeriesComponent,
    WebSeriesDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class WebSeriesModule { }
