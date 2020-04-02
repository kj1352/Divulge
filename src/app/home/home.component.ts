import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    selectedTab: string = 'weather';

    constructor(
    ) { }

    ngOnInit(): void {
    }

    navigateToUrl(url: string) {
        this.selectedTab = url;
    }

}
