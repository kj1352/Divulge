import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import * as moment from 'moment';

@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
    headlines: any;

    constructor(
        private newsService: NewsService
    ) { }

    ngOnInit(): void {
        if (localStorage.getItem('newsHeadlines')) {
            this.headlines = JSON.parse(localStorage.newsHeadlines);
        } else {
            this.newsService.getHeadlines('in').then((resp: any) => {
                this.headlines = {
                    time: new Date(),
                    news: resp.articles
                };
                localStorage.newsHeadlines = JSON.stringify(this.headlines);
            }, (err) => {
                console.log(err);
                alert("Oops, something went wrong :(");
            });
        }
    }

    getNews() {
        this.newsService.getHeadlines('in').then((resp: any) => {
            this.headlines = {
                time: new Date(),
                news: resp.articles
            };
            localStorage.newsHeadlines = JSON.stringify(this.headlines);
        }, (err) => {
            console.log(err);
            alert("Oops, something went wrong :(");
        });
    }

    getFormattedDate(date: any, format: string) {
        return moment(date). format(format);
    }

    openNews(url: string) {
        window.open(url, '_blank');
    }

}
