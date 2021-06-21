import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabusService } from 'src/utility/databus.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.page.html',
  styleUrls: ['./view-profile.page.scss'],
})
export class ViewProfilePage implements OnInit {

  public profile;
  constructor(public dataBus: DatabusService, public router: Router) { 
   
  }

  ngOnInit() {
    this.profile = this.dataBus.navigateData;
    console.log(this.profile);
    
    if(!this.profile)
    {
      this.router.navigateByUrl('/tabs/feeds')
    }
  }

}
