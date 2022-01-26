import { createAction, props } from '@ngrx/store';
import {WeatherInterface} from "../../models/weather.interface";

export const GetWeatherInfo = createAction('[WeatherInfo] GET', props<{location: string}>());
export const GetCityPicture = createAction('[CityPicture] GET', props<{location: string}>());
export const GetWeatherInfoSuccess = createAction('[WeatherInfo] GET_SUCCESS', props<{weather: WeatherInterface}>());
export const GetWeatherInfoError = createAction('[WeatherInfo] GET_ERROR', props<any>());
