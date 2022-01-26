import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import * as WeatherActions from '../actions/weather.actions';
import {WeatherInterface} from "../../models/weather.interface";

export interface State extends EntityState<WeatherInterface> {
  selectId: string | null;
  loaded: boolean;
  loading: boolean;
  weatherInfo: WeatherInterface | null;
  error: boolean;
}

export const adapter: EntityAdapter<WeatherInterface> = createEntityAdapter<WeatherInterface>({
  selectId: (weather: WeatherInterface) => weather.id,
});

export const initialState: State = adapter.getInitialState({
  selectId: null,
  loaded: false,
  loading: false,
  weatherInfo: null,
  error: false,
});

const weatherReducer = createReducer(
  initialState,
  on(WeatherActions.GetWeatherInfo, (state) => ({ ...state, loading: true })),
  on(WeatherActions.GetWeatherInfoSuccess, (state, { weather }) => {
    return {
      ...state,
      weatherInfo: weather,
      loaded: true,
      loading: false,
      error: false
    }
    }
  ),
  on(WeatherActions.GetWeatherInfoError, (state) => ({ ...state, loading: false, loaded: false, error: true })),
);

export function reducer(state: State | undefined, action: Action) {
  return weatherReducer(state, action);
}
