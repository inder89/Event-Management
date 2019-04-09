import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';

const BASE_URL =
  'api.openweathermap.org/data/2.5/weather?q=melbourne,au&appid=f7da9f61a49b25dfe9940b559362b4ae';
const KEY = 'f7da9f61a49b25dfe9940b559362b4ae';

@Injectable()
export class WeatherService {
  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  fetchWeather(cityName): Observable<Object> {
    return this.http
      .get<any>(
        `https://api.apixu.com/v1/current.json?key=4951cc4216b042a6be6234954190804&q=${cityName}`
      )
      .pipe(
        map(resp => {
          const temp = resp.current.temp_c;
          return temp;
        })
      );
  }
  /* public getCurrentTemp(city: string): Subject<number> {
    const dataSubject = new Subject<number>();
    this.http
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},au&appid=5b9e7ea3968875f4da8cb3ba4d7287cd&units=metric`
      )
      .subscribe((weather: any) => {
        dataSubject.next(Math.round(Number(weather.main.temp)));
      });
    return dataSubject;
  } */
}
