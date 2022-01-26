import * as fromWeather from './weather.reducer'
import {ActionReducerMap, createFeatureSelector} from "@ngrx/store";

export interface State {
  weather: fromWeather.State;
}

export const reducers: ActionReducerMap<State> = {
  weather: fromWeather.reducer,
};

export const selectWeatherStore = createFeatureSelector<State>('core');
