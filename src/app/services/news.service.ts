import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NEWS_KEY } from '../data/keys';

@Injectable({
    providedIn: 'root'
})
export class NewsService {

    constructor(
        private http: HttpClient
    ) { }

    async getHeadlines(country: string) {
        return this.http.get('https://newsapi.org/v2/top-headlines?country=' +
        country + '&apiKey=' + NEWS_KEY).toPromise();
    }

    async getCustomHeadlines(country: string, category: string) {
        return this.http.get('https://newsapi.org/v2/top-headlines?country=' +
        country + '&category=' + category + '&apiKey=' + NEWS_KEY).toPromise();
    }
}
