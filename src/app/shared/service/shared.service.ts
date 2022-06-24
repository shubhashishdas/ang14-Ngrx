import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {
  name : string = 'Shared service';
  constructor() {
    console.log(`${this.name} Initialize`);
  }

  getServiceName() {
    console.log(`${this.name} getServiceName() called`);
  }

  // showName() {
  //   console.log('First Service showName...');
  // }
}
