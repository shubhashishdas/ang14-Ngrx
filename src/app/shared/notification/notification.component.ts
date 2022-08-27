import { Component, OnDestroy, OnInit } from '@angular/core';
import { NotificationService } from '../service/notification.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit, OnDestroy {
  message: string;
  class: string;
  subscription: Subscription = new Subscription();

  constructor(private _notificationService: NotificationService) { }

  ngOnInit(): void {
    this.subscription.add(this._notificationService.getMessage().subscribe(response => {
      if (response) {
        this.message = response.message;
        this.class = response.class;
        setTimeout(() => {
          this.message = '';
        }, 3000);
      }
    }))
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
