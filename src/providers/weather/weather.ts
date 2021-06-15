import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WeatherProvider {
  private apiKey = '75ec7cd3e6c4165da3f667f524200099';

  constructor(private http: HttpClient) { }

  getWeatherDeatils(cityName: string): Promise<any> {
    let urlparams = new HttpParams();
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=${this.apiKey}`;
    return this.http.get(url, { params: urlparams })
      .toPromise();
  }

}
