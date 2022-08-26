import { Component, OnDestroy, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit, OnDestroy {
  message: string;
  subscription: Subscription = new Subscription();

  constructor(private _notificationService: NotificationService) { }

  ngOnInit(): void {
    this.subscription.add(this._notificationService.getMessage().subscribe(message => {
      if (message) {
        this.message = message;
        setTimeout(() => {
          this.message = '';
        }, 5000);
      }
    }))
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
