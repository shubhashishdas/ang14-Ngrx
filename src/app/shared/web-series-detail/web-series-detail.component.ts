import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-web-series-detail',
  templateUrl: './web-series-detail.component.html',
  styleUrls: ['./web-series-detail.component.scss']
})
export class WebSeriesDetailComponent implements OnInit {
  @Input() id: string;
  constructor() { }

  ngOnInit(): void {
  }

}
