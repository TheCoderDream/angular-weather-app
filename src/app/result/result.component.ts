import {Component, Input, OnInit} from '@angular/core';
import {WeatherInterface} from "../models/weather.interface";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  @Input() weatherInfo!: WeatherInterface | null;
  math = Math;
  highestTemp = 0;
  lowestTemp = 0;
  temp = 0;
  constructor() { }

  ngOnInit(): void {
    if (this.weatherInfo) {
      this.temp = this.weatherInfo.temp;
      this.highestTemp = this.weatherInfo.highestTemp;
      this.lowestTemp = this.weatherInfo.lowestTemp;
    }
  }

}
