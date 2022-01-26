import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import {AppTitleComponent} from "./app-title/app-title.component";
import { SearchCityComponent } from './search-city/search-city.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { ResultComponent } from './result/result.component';
import {SharedModule} from "./shared/shared.module";
import { ForecastHourComponent } from './forecast-hour/forecast-hour.component';
import {NotFoundComponent} from "./not-found/not-found.component";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import { effects, reducers } from './store';


@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    AppTitleComponent,
    SearchCityComponent,
    ResultComponent,
    ForecastHourComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    StoreModule.forRoot(
      {}
    ),
    StoreModule.forFeature('core', reducers),
    EffectsModule.forRoot(effects),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
