import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { NewsComponent } from './news/news.component';
import { IonicModule } from '@ionic/angular';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { NewsService } from './services/news.service';
import { WeatherService } from './services/weather.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
    declarations: [
        AppComponent,
        WeatherComponent,
        NewsComponent,
        HomeComponent,
        AboutComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        IonicModule.forRoot(),
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    ],
    providers: [
        WeatherService,
        NewsService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
