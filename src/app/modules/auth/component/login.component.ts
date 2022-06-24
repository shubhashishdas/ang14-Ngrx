import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { APP_STATE } from 'src/app/state/app-state';
import { setLoadingState } from 'src/app/state/app.action';
import { userLogin } from '../store/auth.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  // "user":{
  //   "email":"s16@mailinator.com",
  //   "username":"s16",
  //   "bio":null,
  //   "image":null,
  //   "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InMxNkBtYWlsaW5hdG9yLmNvbSIsInVzZXJuYW1lIjoiczE2IiwiaWF0IjoxNjU1NDc1Mzg5LCJleHAiOjE2NjA2NTkzODl9.uh2UCQdSJ5wKUbWZcFpzDzi9ye9XGBjoqriPHxwZTLc"
  // }

  constructor(private _fb: FormBuilder, private _store: Store<APP_STATE>) {}

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm(): void {
    this.loginForm = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onLoginSubmit(): void {
    this._store.dispatch(setLoadingState({ isLoading: true }));
    this._store.dispatch(userLogin(this.loginForm.value));
  }
}
