import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as WeatherActions from '../actions/weather.actions';
import {WeatherService} from "../../services/weather.service";

@Injectable()
export class WeatherEffects {
  getContacts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WeatherActions.GetWeatherInfo),
      mergeMap((action) => {
        return this.weatherService.getWeatherInfo(action.location).pipe(
          map(([data1, data2]: [data1: any, data2: any]) => {
            const months = [
              'January',
              'February',
              'March',
              'April',
              'May',
              'June',
              'July',
              'August',
              'September',
              'October',
              'Nocvember',
              'December',
            ];
            const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const currentDate = new Date();
            const date = `${days[currentDate.getDay()]} ${currentDate.getDate()} ${
              months[currentDate.getMonth()]
            }`;
            const sunset = new Date(data1.sys.sunset * 1000).toLocaleTimeString().slice(0, 5);
            const sunrise = new Date(data1.sys.sunrise * 1000).toLocaleTimeString().slice(0, 5);

            const weatherInfo = {
              id: data1.id,
              city: data1.name,
              country: data1.sys.country,
              date,
              description: data1.weather[0].description,
              main: data1.weather[0].main,
              temp: data1.main.temp,
              highestTemp: data1.main.temp_max,
              lowestTemp: data1.main.temp_min,
              sunrise,
              sunset,
              clouds: data1.clouds.all,
              humidity: data1.main.humidity,
              wind: data1.wind.speed,
              forecast: data2.list,
            };
            return WeatherActions.GetWeatherInfoSuccess({ weather: weatherInfo })
          }),
          catchError((error) => {
            return of(WeatherActions.GetWeatherInfoError({ error }))
          })
        )
      }
      )
    )
  );

  constructor(private weatherService: WeatherService, private actions$: Actions) {}
}
