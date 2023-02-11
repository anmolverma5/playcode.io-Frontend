import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { AppStateService } from 'src/app/shared/app-state.service';
import { BehaviorService } from 'src/app/shared/behavior.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', '../../home/home.css']
})
export class HeaderComponent {
  showPricing: boolean = false;
  showSettings: boolean = true;
  public user: any;
  constructor(
    private router: Router,
    public appStateSvc: AppStateService,
    private _bs: BehaviorService
  ) {
    this._bs.getUserData().subscribe((res: any) => {
      if (res) {
        this.user = res
      } else {
        this.user = _bs.getLocalUser()
        console.log('this.user', this.user)
      }
    });
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      if (evt.url == "/pricing") {
        this.showPricing = true;
      }
      else this.showPricing = false;
      if (evt.url == "/learn") {
        this.showSettings = false;
        this.showPricing = true;
      }
      else this.showSettings = true;
    })
  }
}
