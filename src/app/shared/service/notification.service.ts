import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
interface NOTIFICATION {
  message: string,
  class: string
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private show$ = new BehaviorSubject({ message: '', class: '' });
  constructor() { }

  showMessage(message: string, style: string = 'bg-success'): void {
    this.show$.next({ message: message, class: style });
  }

  getMessage(): Observable<NOTIFICATION> {
    return this.show$;
  }

}
