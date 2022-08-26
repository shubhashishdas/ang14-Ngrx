import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private show$ = new BehaviorSubject('');
  constructor() { }

  showMessage(message: string) {
    this.show$.next(message);
  }

  getMessage(): Observable<string> {
    return this.show$;
  }

}
