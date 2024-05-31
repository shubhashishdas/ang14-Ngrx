import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DateComponent } from 'src/app/shared/date/date.component';
import { Add } from '../../favorite/state/favorite.action';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [DateComponent]
})
export class DashboardComponent implements OnInit {
  outerDate: Date;

  constructor(
    private _store: Store
  ) { }

  ngOnInit(): void {
    this.outerDate = new Date();
    console.log(this.outerDate);
    this.addFavorite();
  }

  addFavorite(): void {
    let movie = {
      id: "m1",
      type: "Movie",
      part: "",
      title: "The Irishman",
      director: "",
    }
    this._store.dispatch(Add({movie}));
  }

}
