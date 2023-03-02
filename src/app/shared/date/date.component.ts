import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-date',
  standalone: true,
  template: `
    <div class="date">{{ innerDate }}</div>
  `,
  styles: [`
    .date {
      background: aliceblue;
      color: brown;
      padding: 5px;
      margin: 5px 0;
    }
  `]
})
export class DateComponent implements OnInit {
  @Input()
  innerDate: Date;
  @Output()
  innerDateChange = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.innerDate = new Date();
      this.innerDateChange.emit(this.innerDate);
    }, 1000);
  }

}
