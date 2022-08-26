import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { USER_STATE } from '../store/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _http: HttpClient) {}

  login(): Observable<USER_STATE> {
    return this._http.get<USER_STATE>("assets/data/user.json").pipe(map((users:any) => users.users));
  }

  registerUser(userData: any): Observable<any> {
    return this._http.post(`${environment.apiUrl}users`, userData);
  }

  authenticate(postData : any, usersData: USER_STATE[]) {
    return usersData.filter((el: any) => {
      if (el.email === postData.email && el.password === postData.password) {
        el.token = this.generate_token(32);
        return el;
      }
    });
  }

  generate_token(length: number){
    //edit the token allowed characters
    const a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split("");
    let b = [];  
    for (let i=0; i<length; i++) {
        let j: any = (Math.random() * (a.length-1)).toFixed(0);
        b[i] = a[j];
    }
    return b.join("");
}
}
