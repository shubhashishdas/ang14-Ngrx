import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root'
})
export class FirstService {
  name : string = 'First ';
  constructor() {
    console.log('First Service Constructor...');
  }

  getServiceName() {
    console.log('First Service getServiceName...');
  }

}
