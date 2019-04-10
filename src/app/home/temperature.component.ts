import { Component, Input, OnChanges } from '@angular/core';
import { WeatherService } from '../shared/weather.service';

@Component({
  selector: 'city-temperature',
  template: `
    <div>{{ temperature }}C</div>
  `
})
export class TemperatureComponent implements OnChanges {
  @Input() city: string;
  temperature;

  constructor(public weatherService: WeatherService) {}

  ngOnChanges(): void {
    this.getWeather();
  }

  public getWeather() {
    this.weatherService.fetchWeather(this.city).subscribe(data => {
      this.temperature = data;
      console.log(this.temperature);
    });
  }
}
