import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebSeriesService {

  constructor(
    private _http: HttpClient
  ) { }

  getAllWebSeries() {
    return this._http.get("assets/data/web-series.json");
  }
}
