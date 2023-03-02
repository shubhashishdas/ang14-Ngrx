import { Directive, OnDestroy, OnInit } from '@angular/core';
import { MovieService } from './service/movie.service';

@Directive()
export class Movie implements OnInit, OnDestroy {
  moviesData: any = [];

  constructor(
    private _movieService: MovieService
  ) {
    console.log('Movie Class Constructor');
  }

  ngOnInit(): void {
    this.getAllMovies();
  }

  ngOnDestroy(): void {
    console.log('Movie Class OnDestroy');
  }

  getAllMovies() {
    this._movieService.getAllMovies().subscribe(movies => {
      this.moviesData = movies;
    });
  }
}
