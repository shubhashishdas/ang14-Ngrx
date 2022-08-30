import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebSeriesDetailComponent } from './web-series-detail.component';

describe('WebSeriesDetailComponent', () => {
  let component: WebSeriesDetailComponent;
  let fixture: ComponentFixture<WebSeriesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebSeriesDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebSeriesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
