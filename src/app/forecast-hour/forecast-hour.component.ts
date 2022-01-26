import {Component, Input, OnInit} from '@angular/core';
import {Forecast} from "../models/weather.interface";
import {WeatherService} from "../services/weather.service";

@Component({
  selector: 'app-forecast-hour',
  templateUrl: './forecast-hour.component.html',
  styleUrls: ['./forecast-hour.component.css']
})
export class ForecastHourComponent implements OnInit {
  @Input() forecast!: Forecast;
  iconUrl = '';
  math = Math;
  private _temp: string = '';

  set temp(val: number | string) {
    this._temp = `${Math.floor(Number(val))} &#176;`;
  }

  get temp(): string {
    return this._temp;
  }

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    if (this.forecast) {
      this.iconUrl = this.weatherService.getWeatherIcon(this.forecast);
      this.temp = this.forecast.main.temp;
    }
  }

}
