import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    openURL(url: string) {
        window.open(url, '_blank');
    }

    shareApp() {
        let shareVar: any;

        shareVar = window.navigator;

        if (shareVar && shareVar.share) {
            shareVar.share({
                title: 'Divulge',
                text: 'Hey!, Check this app out...',
                url: 'https://play.google.com/store/apps/details?id=ionic.divulge.release',
            })
            .then(() => console.log('Successful share'))
            .catch((error) => console.log('Error sharing', error));
        }
    }

}
