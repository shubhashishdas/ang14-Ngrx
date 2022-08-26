import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { NotificationService } from 'src/app/shared/notification.service';
import { APP_STATE } from 'src/app/state/app-state';
import { setLoadingState } from 'src/app/state/app.action';
import { AuthService } from '../service/auth.service';
import { loginSuccess, userLogin } from '../store/auth.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private _fb: FormBuilder, 
    private _store: Store<APP_STATE>,
    private _authService: AuthService,
    private _notificationService: NotificationService
  ) {}

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
    this._authService.login().pipe(
      map((userData: any) => this._authService.authenticate(this.loginForm.value, userData) )).subscribe((loggedInData:any) => {
        if (loggedInData.length) {
          this._notificationService.showMessage('Logged In Successfully');
          this._store.dispatch(loginSuccess(loggedInData[0]));
        } else {
          this._notificationService.showMessage('Email and Password are not correct.');
        }
        this._store.dispatch(setLoadingState({ isLoading: false }));
      });
  }
}
