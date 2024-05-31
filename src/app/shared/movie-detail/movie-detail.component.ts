import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  @Input() id: string;
  constructor() { }

  ngOnInit(): void {
  }

}
