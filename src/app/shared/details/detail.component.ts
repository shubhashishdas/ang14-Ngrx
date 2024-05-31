import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { APP_STATE } from 'src/app/state/app-state';
import { setLoadingState } from 'src/app/state/app.action';
import { DetailDirective } from '../directives/detail.directive';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';
import { WebSeriesDetailComponent } from '../web-series-detail/web-series-detail.component';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  id: string;
  @ViewChild(DetailDirective, {static: true}) appDetail!: DetailDirective;
  componentType: any;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _cd: ChangeDetectorRef,
    private _store: Store<APP_STATE>
  ) { }
    
  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params => {
      console.log(params['id']);
      this.id = params['id'];
    });
    this._activatedRoute.queryParams.subscribe(queryParams => {
      console.log(queryParams);
      if (queryParams['movie']) {
        this.componentType = MovieDetailComponent;
      } else {
        this.componentType = WebSeriesDetailComponent;
      }
    });
    this.loadComponent();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this._store.dispatch(setLoadingState({isLoading: false}));
    }, 2000);
    // Promise.resolve().then(() => {
    //   this._store.dispatch(setLoadingState({isLoading: false}));
    // });
  }

  loadComponent() {
    const viewContainerRef = this.appDetail._viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent<DetailDirective>(this.componentType);
    // componentRef.instance.data = this.id;
  }
}
