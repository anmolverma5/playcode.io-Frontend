import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AppStateService } from 'src/app/shared/app-state.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  signUp: boolean = false;
  constructor(private router: Router,
    public appStateSvc: AppStateService,){
      this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
          return;
        }
        if(evt.url == "/sign-up") this.signUp = true;
        else this.signUp = false;
    })
  }

}
