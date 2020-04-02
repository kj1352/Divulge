import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WEATHER_KEY } from '../data/keys';

@Injectable({
    providedIn: 'root'
})
export class WeatherService {

    constructor(
        private http: HttpClient
    ) { }

    async getWeatherByCity(cityName: string) {
        return this.http.get('https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&units=metric&appid=' + WEATHER_KEY).toPromise();
    }

    async getWeatherByCoOrds(lat: number | string, lng: number | string ) {
        return this.http.get('https://api.openweathermap.org/data/2.5/forecast?lat='+ lat.toString() + '&lon=' + lng.toString() + '&units=metric&appid=' + WEATHER_KEY).toPromise();
    }
}
