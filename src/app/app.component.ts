import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppStateService } from './shared/app-state.service';
import { StateData } from './shared/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private router: Router,
    private appStateSvc : AppStateService
  ){
    this.appStateSvc.stateData = new StateData();
  }
  title = 'playcode.io';
}
