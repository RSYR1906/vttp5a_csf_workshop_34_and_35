import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Weather } from '../model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient){}


  getWeather(city: string, key: string): Promise<Weather> {
    const params = new HttpParams()
      .set('q', city)    // City name
      .set('key', key);  // API key for weatherapi.com
    return lastValueFrom(
      this.httpClient.get<Weather>(
        'https://api.weatherapi.com/v1/current.json',
        { params: params }
      )
    );
  }

  }
