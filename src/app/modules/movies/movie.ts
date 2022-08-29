import { Directive, OnDestroy, OnInit } from '@angular/core';

@Directive()
export class Movie implements OnInit, OnDestroy {
  constructor() {
    console.log('Movie Class Constructor');
  }

  ngOnInit(): void {
    console.log('Movie Class OnInit');
  }

  ngOnDestroy(): void {
    console.log('Movie Class OnDestroy');
  }
}
