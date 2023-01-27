import { Component } from '@angular/core';
import { AppStateService } from 'src/app/shared/app-state.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent {
  constructor(public appStateSvc: AppStateService){
  
  }
}
