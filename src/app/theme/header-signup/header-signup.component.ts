import { Component } from '@angular/core';
import {Location} from '@angular/common';
@Component({
  selector: 'app-header-signup',
  templateUrl: './header-signup.component.html',
  styleUrls: ['./header-signup.component.css']
})
export class HeaderSignupComponent {
constructor(private _location: Location){

}
backClicked() {
  this._location.back();
}
}
