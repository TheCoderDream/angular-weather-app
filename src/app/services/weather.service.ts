import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {forkJoin} from "rxjs";
import {Forecast} from "../models/weather.interface";

@Injectable({ providedIn: 'root' })
export class WeatherService {
  APIkey = '010721642521f31b0fbc8c3831d45951';
  constructor(private http: HttpClient) {
  }

  getWeatherInfo(event: string) {
    const weather = `https://api.openweathermap.org/data/2.5/weather?q=${event}&APPID=${this.APIkey}&units=metric`;
    const forecast = `https://api.openweathermap.org/data/2.5/forecast?q=${event}&APPID=${this.APIkey}&units=metric`;
    return forkJoin([this.http.get(weather), this.http.get(forecast)]);
  }

  getWeatherIcon(forecast: Forecast) {
    return `https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`;
  }
}
