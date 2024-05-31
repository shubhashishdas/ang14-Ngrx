import { Directive, OnDestroy, OnInit } from '@angular/core';

@Directive()
export class Favorite implements OnInit, OnDestroy {
  webSeriesData: any = [];

  constructor( ) {
    console.log('Favorite Class Constructor');
  }

  ngOnInit(): void {
    // this.getAllWebSeries();
  }

  ngOnDestroy(): void {
    console.log('Favorite Class OnDestroy');
  }
}
