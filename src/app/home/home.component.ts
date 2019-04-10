import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../shared/index';
import { WeatherService } from '../shared/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  events: IEvent[];
  city = '';
  updatedTemp;
  selectedEvent;
  isDataAvailable = false;

  constructor(
    public dataService: DataService,
    public route: ActivatedRoute,
    public weatherService: WeatherService
  ) {}

  ngOnInit() {
    this.events = this.route.snapshot.data['events'];
  }

  public selectEvent(event) {
    this.selectedEvent = event;
    this.city = this.selectedEvent.city;

    this.weatherService.fetchWeather(this.city).subscribe(data => {
      this.updatedTemp = data;
    });
  }
}
