import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { BehaviorService } from './behavior.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    public router: Router,
    public _bs: BehaviorService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError((err: any) => {
      let message = "Server Error";
      if (err.error) {
        if (err.error.message) message = err.error.message;
        if (err.error.error) message = err.error.error.message;
      }
      if (err.status === 401) {
        // this.toastr.toastrConfig.preventDuplicates = true;
        console.log('err.error', err.error);
        this._bs.signOut()
        this.router.navigateByUrl('/')
      } else {
        throwError(err.error);
      }
      return throwError(err.error);

    }));
  }
}
