import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { REGISTER_STATE } from '../store/register';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private _http: HttpClient) {}

  registerUser(userData: REGISTER_STATE): Observable<any> {
    return this._http.post(`${environment.apiUrl}/users`, userData);
  }
}
