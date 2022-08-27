import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/modules/auth/service/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, OnDestroy {
  isLoggedIn: boolean;
  subscription = new Subscription();

  constructor(private _authService: AuthService, private _router: Router) { }

  ngOnInit(): void {
    this.subscription.add(this._authService.getLoginValue().subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
    }));
    if (localStorage.getItem("currentUser")) {
      this.isLoggedIn = true;
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  logout() {
    this._authService.logout();
    this._router.navigate(["/login"]);
  }

}
