import * as fromFeature from '../reducers';
import { createSelector } from '@ngrx/store';

const selectWeatherState = createSelector(fromFeature.selectWeatherStore, (state: fromFeature.State) => state.weather);
export const selectWeatherInfo = createSelector(selectWeatherState, (state) => state.weatherInfo);
export const selectWeatherError = createSelector(selectWeatherState, (state) => state.error);
