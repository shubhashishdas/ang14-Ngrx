import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Subscription } from 'rxjs';
import { setLoadingState } from 'src/app/state/app.action';
import { AuthService } from '../service/auth.service';
import { loginSuccess, userLogin } from '../store/auth.action';
import { NotificationService } from 'src/app/shared/service/notification.service';
import { APP_STATE } from 'src/app/state/app-state';
import { NOTIFICATION_SUCCESS_CLASS, NOTIFICATION_WARNING_CLASS } from 'src/app/shared/constant';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  subscription = new Subscription();

  constructor(
    private _fb: FormBuilder,
    private _store: Store<APP_STATE>,
    private _authService: AuthService,
    private _notificationService: NotificationService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  createLoginForm(): void {
    this.loginForm = this._fb.group({
      email: ['test.shubhashish@gmail.com', [Validators.required, Validators.email]],
      password: ['shubhashish123456', [Validators.required]],
    });
  }

  onLoginSubmit(): void {
    this._store.dispatch(setLoadingState({ isLoading: true }));
    this._authService.login().pipe(
      map((userData: any) => this._authService.authenticate(this.loginForm.value, userData))).subscribe((loggedInData: any) => {
        if (loggedInData.length) {
          this._store.dispatch(loginSuccess(loggedInData[0]));
          localStorage.setItem('currentUser', JSON.stringify(loggedInData[0]));
          this._authService.setLoginValue(true);
          this._notificationService.showMessage('User logged in successfully', NOTIFICATION_SUCCESS_CLASS);
          this._activatedRoute.queryParams.subscribe((params: Params) => {
            if (params['returnUrl']) {
              this._router.navigate([params['returnUrl']]);
            } else {
              this._router.navigate(['/']);
            }
          });
        } else {
          this._notificationService.showMessage('Email and Password are not correct.', NOTIFICATION_WARNING_CLASS);
        }
        this._store.dispatch(setLoadingState({ isLoading: false }));
      });
  }
}
