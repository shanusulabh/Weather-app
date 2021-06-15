import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';
import { LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-display-weather',
  templateUrl: 'display-weather.html',
})
export class DisplayWeatherPage {
  title: any;
  city: any;
  errorText: any;
  isErrorExists: boolean = false;
  displayWeatherData: boolean = false;
  cityName: any;
  currentTemp: any;
  maxTemp: any;
  minTemp: any;
  humidity: any;
  country: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public weatherSrv: WeatherProvider,
    public loadingCtrl: LoadingController, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    this.title = 'Check Weather';
  }

  inputCity() {
    if (this.isErrorExists) { this.isErrorExists = false; this.errorText = null; }
  }

  searchReport() {
    const _self = this;
    if (_self.displayWeatherData) _self.displayWeatherData = false;
    if (!_self.city) { _self.isErrorExists = true; return _self.errorText = 'Please Enter City Name' }
    else {
      let loader = _self.loadingCtrl.create({ content: "Checking Weather. Please wait..." });
      loader.present();
      _self.weatherSrv.getWeatherDeatils(_self.city).then(weather => { //getting weather report from api call
        if (weather && weather.id) _self.displayWeatherDetails(weather);
        loader && loader.dismiss();
      }).catch(err => {
        loader && loader.dismiss();
        if (err && err.status == '404') _self.alertCtrl.create({ message: 'City Not Found. Please try again later.', buttons: ['OK'] }).present();
        else _self.alertCtrl.create({ message: 'Issue in fetching weather details. Please try again later.', buttons: ['OK'] }).present();
      })
    }
  }

  displayWeatherDetails(weather) {
    const _self = this;
    _self.displayWeatherData = true;
    const { name } = weather;
    const { temp, temp_max, temp_min, humidity } = weather.main;
    const { country } = weather.sys;
    _self.cityName = name;
    _self.currentTemp = temp;
    _self.maxTemp = temp_max;
    _self.minTemp = temp_min;
    _self.humidity = humidity;
    _self.country = country;
  }

}
