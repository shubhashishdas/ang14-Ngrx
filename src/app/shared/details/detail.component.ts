import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailDirective } from '../directives/detail.directive';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';
import { WebSeriesDetailComponent } from '../web-series-detail/web-series-detail.component';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  @ViewChild(DetailDirective, {static: true}) appDetail!: DetailDirective;
  componentType: any;
  constructor(
    private _activatedRoute: ActivatedRoute
  ) { }
    
  ngOnInit(): void {
    this._activatedRoute.queryParams.subscribe(params => {
      console.log(params);
      if (params['movie']) {
        this.componentType = MovieDetailComponent;
      } else {
        this.componentType = WebSeriesDetailComponent;
      }
    });
    this.loadComponent();
  }

  loadComponent() {
    const viewContainerRef = this.appDetail._viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<DetailDirective>(this.componentType);
    // componentRef.instance.data = adItem.data;
  }

}
