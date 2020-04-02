import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import * as moment from 'moment';

@Component({
    selector: 'app-weather',
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
    weatherForecast: any;
    searchTerm: string = '';

    constructor(
        private weatherService: WeatherService
    ) { }

    ngOnInit(): void {
        if (localStorage.getItem('weatherForecast')) {
            this.weatherForecast = JSON.parse(localStorage.getItem('weatherForecast'));
        } else {
            this.getCityData('Bangalore');
        }
    }

    getCityData(searchTerm?: string) {
        let text: string;

        searchTerm? text = searchTerm : text = this.searchTerm;

        this.weatherService.getWeatherByCity(text).then((resp) => {
            this.weatherForecast = resp;
            localStorage.weatherForecast = JSON.stringify(this.weatherForecast);
        }, (err) => {
            console.log(err);
            alert("No city with that name :(");
        });
    }

    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.weatherService.getWeatherByCoOrds(position.coords.latitude,
                position.coords.longitude).then((resp) => {
                    this.weatherForecast = resp;
                    localStorage.weatherForecast = JSON.stringify(this.weatherForecast);
                }, (err) => {
                    console.log(err);
                    alert("Oops, Something went wrong :(");
                });
            });
        } else {
            alert("Location could not be detected. Please enter your city name on top");
        }
    }

    getFormattedDate(date: any, format: string) {
        return moment(new Date(date * 1000)). format(format);
    }

    isInvalidDate(date: any) {
        return new Date() > new Date(date * 1000)? true : false;
    }

}
