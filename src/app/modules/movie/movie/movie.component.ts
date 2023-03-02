import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../movie';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent extends Movie implements OnInit {

  constructor(
    _movieService: MovieService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {
    super(_movieService);
  }

  gotoDetailPage(id: string): void {
    this._router.navigate([id], { relativeTo: this._activatedRoute, queryParams: {movie: true} })
    .then(nav => {
      console.log(nav); // true if navigation is successful
    }, err => {
      console.log(err) // when there's an error
    });
  }
}
