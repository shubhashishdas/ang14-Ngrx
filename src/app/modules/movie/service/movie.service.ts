import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(
    private _http: HttpClient
  ) { }

  getAllMovies() {
    return this._http.get("assets/data/movie.json");
  }
}
