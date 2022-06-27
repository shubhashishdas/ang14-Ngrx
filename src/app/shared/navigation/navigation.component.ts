import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SharedService } from '../service/shared.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  isLoggedIn: boolean;
  constructor( private _sharedService: SharedService,) { }

  ngOnInit(): void {
    this._sharedService.isLoggedIn().subscribe(isLoggedInValue => {
      this.isLoggedIn = isLoggedInValue;
    });
  }

}
