import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {BigLabelComponent} from "./components/big-label";
import {MediumLabelComponent} from "./components/medium-label";
import {SmallLabelComponent} from "./components/small-label";
import {TextComponent} from "./components/text.component";
import {WeatherIconPipe} from "./pipes/weather-icon.pipe";
import {LazyLoadedBgComponent} from "./components/lazy-loaded-bg.component";

@NgModule({
  declarations: [BigLabelComponent,MediumLabelComponent, SmallLabelComponent, TextComponent, LazyLoadedBgComponent, WeatherIconPipe],
  imports: [CommonModule],
  exports: [BigLabelComponent, MediumLabelComponent, SmallLabelComponent, TextComponent, LazyLoadedBgComponent, WeatherIconPipe]
})
export class SharedModule {}
