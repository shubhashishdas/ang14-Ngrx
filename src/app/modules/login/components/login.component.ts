import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { APP_STATE } from 'src/app/state/app-state';
import { setLoadingState } from 'src/app/state/app.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

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
    console.log('login submit created');
    console.log(this.loginForm);
    setTimeout(() => {
      this._store.dispatch(setLoadingState({ isLoading: false }));
    }, 2000);
  }
}
