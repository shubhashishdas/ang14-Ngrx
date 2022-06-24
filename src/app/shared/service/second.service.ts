export class SecondService {
  name : string = 'Second ';
  constructor() {
    console.log('Second Service Constructor...');
  }

  getServiceName() {
    console.log('Second Service getServiceName...');
  }
}
