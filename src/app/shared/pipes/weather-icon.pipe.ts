import {Pipe, PipeTransform} from "@angular/core";
import {WeatherType} from "../../models/weather.interface";

@Pipe({
  name: 'weatherIcon'
})
export class WeatherIconPipe implements PipeTransform {
  transform(weatherType: WeatherType | null | undefined): any {
    let weatherIcon = null;

    switch (weatherType) {
      case 'Thunderstorm':
        weatherIcon = 'fas fa-bolt';
        break;
      case 'Drizzle':
        weatherIcon = 'fas fa-cloud-rain';
        break;
      case 'Rain':
        weatherIcon = 'fas fa-cloud-showersHeavy';
        break;
      case 'Snow':
        weatherIcon = 'fas fa-snowflake';
        break;
      case 'Clear':
        weatherIcon = 'fas fa-sun';
        break;
      case 'Clouds':
        weatherIcon = 'fas fa-cloud';
        break;
      default:
        weatherIcon = 'fas fa-smog';
    }

    return weatherIcon;
  }

}
