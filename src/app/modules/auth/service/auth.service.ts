import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _http: HttpClient) {}

  login(userData: any): Observable<any> {
    return this._http.post(`${environment.apiUrl}users/login`, userData);
  }

  registerUser(userData: any): Observable<any> {
    return this._http.post(`${environment.apiUrl}users`, userData);
  }
}
