import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorService } from './behavior.service';
import { AppStateService } from './app-state.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  protected debug = false;
  token: any;
  currentUserData: any;
  constructor(private _bs: BehaviorService,
    private appStateService: AppStateService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.currentUserData = this._bs.getLocalUser();
    if (this.currentUserData) {
      let headers = {};
      const token = this.currentUserData.access_token ? this.currentUserData.access_token : '';
      if (token) {
        headers = {
          'Authorization': `Bearer ${token}`,
          'Access-Control-Allow-Origin': '*',
          'Accept': 'application/json',
        }
        request = request.clone({
          setHeaders: headers
        })
      }
    }
    return next.handle(request);
  }
}