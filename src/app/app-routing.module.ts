import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { WeatherComponent } from './weather/weather.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', pathMatch: 'full', component: HomeComponent },
    { path: 'news', pathMatch: 'full', component: NewsComponent },
    { path: 'weather', pathMatch: 'full', component: WeatherComponent },
    { path: 'about', pathMatch: 'full', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
