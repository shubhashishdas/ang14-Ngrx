import { Component, OnInit } from '@angular/core';
import { DateComponent } from 'src/app/shared/date/date.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [DateComponent]
})
export class DashboardComponent implements OnInit {
  outerDate: Date;

  constructor() { }

  ngOnInit(): void {
    this.outerDate = new Date();
  }

}
