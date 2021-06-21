import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EndpointService } from 'src/api/endpoint.service';
import { DatabusService } from 'src/utility/databus.service';

@Component({
    selector: 'app-feeds',
    templateUrl: 'feeds.page.html',
    styleUrls: [ 'feeds.page.scss' ]
})
export class FeedsPage {

    statusList = [
        {
            name: 'John Watson',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRbgRz3TYR0yIMijWAG4yM-wFl_SCit8aGNldLahP3kEIH1ODFx'
        },
        {
            name: 'Kenny Handerson',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTRsaj20eAE3_QN-Afw6GUAcvWVVTA9PlqeVuwB5pIH41qv5kxZ'
        },
        {
            name: 'David Nick',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_ilM7E3aZocNUE01o1Gd-zd7A8668HlWeIblKAqGLcG-2OO0o'
        },
        {
            name: 'Warner Lin',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR0FoSc8DAoqb-_Nve8lxk_lgtnSuAeqGA-zYjC6tENDkTaTrD7'
        },
        {
            name: 'Anderson',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_k8OI5LCICslf_OzVMBzMMA7GblWc4iL0hCL0m7jXON3GNDwH'
        }
    ];
    feedList = [];

    slideOpts = {
        initialSlide: 0,
        speed: 400
    };

    page: number = 1;
    selector: 'ion-content'

    constructor(private endpoint: EndpointService, public databus: DatabusService, public router: Router) {
        this.loadFeeds();
    }

    loadingFeed = false;
    loadFeeds() {
        if(this.loadingFeed == false) {
            this.loadingFeed = true;
            this.endpoint.getRandomUser(this.page).subscribe( (feeds: any) => {
                this.loadingFeed = false;
                if(feeds.results && feeds.results.length > 0)  {
                    this.feedList = [...this.feedList, ...feeds.results];
                    this.page++;
                    console.log(this.feedList);
                }
            })
        }
    }
    
    openProfile(profile) {
        this.databus.navigateData = profile;
        this.router.navigateByUrl('/view-profile');
    }

    clicked() {
        console.log("clicked");
    }

}
