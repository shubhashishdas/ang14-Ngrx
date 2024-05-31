import { Component, OnInit } from '@angular/core';
import { Favorite } from '../favorite';
import { Store } from '@ngrx/store';
import { Add } from '../state/favorite.action';
import { favoriteMovieSelector } from '../state/favorite.selector';
import { APP_STATE } from 'src/app/state/app-state';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent extends Favorite implements OnInit {

  constructor( 
    private _store: Store<APP_STATE>
  ) { 
    super();
  }

  override ngOnInit(): void {
    this.addFavorite();
    this.getFavorite();
  }

  addFavorite(): void {
    let movie = {
      id: "m2",
      type: "Movie",
      part: "8",
      title: "David Attenborough: A Life on Our Planet",
      director: "",
    }
    this._store.dispatch(Add({movie}));
  }

  getFavorite() {
    this._store.select(favoriteMovieSelector).subscribe((response) => {
      console.log(response);
    });
  }
}
