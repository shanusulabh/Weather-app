import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DisplayWeatherPage } from './display-weather';

@NgModule({
  declarations: [
    DisplayWeatherPage,
  ],
  imports: [
    IonicPageModule.forChild(DisplayWeatherPage),
  ],
})
export class DisplayWeatherPageModule {}
