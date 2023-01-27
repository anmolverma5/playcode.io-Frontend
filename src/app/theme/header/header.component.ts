import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { AppStateService } from 'src/app/shared/app-state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css','../../home/home.css']
})
export class HeaderComponent {
  showPricing: boolean = false;
  showSettings: boolean = true;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public appStateSvc: AppStateService,
  ){
  this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
          return;
        }
        if(evt.url == "/pricing")
        {
          this.showPricing = true;
        }
        else this.showPricing = false;
        if(evt.url == "/learn"){this.showSettings = false;
          this.showPricing = true;}
        else this.showSettings = true;
    })
  }
}
