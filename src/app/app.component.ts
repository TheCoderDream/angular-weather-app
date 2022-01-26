import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import * as fromStore from './store';
import {LazyLoadedImageServices} from "./shared/services/lazy-loaded-image.services";
import {combineLatest, Observable, tap} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-weather-app';
  weatherInfo$ = this.store.select(fromStore.selectWeatherInfo).pipe(tap(console.log));
  error$ = this.store.select(fromStore.selectWeatherError).pipe(tap(console.log));
  showResult$ = combineLatest(
    this.weatherInfo$,
    this.error$
  ).pipe(map(([weatherInfo, error]) => weatherInfo || error )) as Observable<boolean>;

  constructor(private store: Store<fromStore.State>, private lazyLoadedBgService: LazyLoadedImageServices) {}

  handleSearchCity = (event: string) => {
    this.store.dispatch(fromStore.GetWeatherInfo({location: event}));
    // no need to unsubscribe it is only one time http request
    this.lazyLoadedBgService.fetchImageByCity(event).subscribe();
  };
}
