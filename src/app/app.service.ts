import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, throwError } from 'rxjs';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private _apiUrl = environment.apiUrl;

  constructor(
    private router: Router,
    private httpClient: HttpClient
  ) { }
  allApi(url: any = '', data: any = {}, method: any = 'get') {
    if (method == 'post') return this.add(url, data);
    else if (method == 'put') return this.update(url, data);
    else if (method == 'delete') return this.deleteRecord(url, data);
    return this.getAll(url, data);
  }
  add(url: any = '', data: any = {}) {
    return this.httpClient.post(this._apiUrl + url, data).pipe(
      map((response: any) => {
        return response;
      }),
      catchError(this.handleError)
    );
  }
  update(url: any = '', data: any = {}) {
    return this.httpClient.put(this._apiUrl + url, data).pipe(
      map((response: any) => {
        return response;
      }),
      catchError(this.handleError)
    )
  }
  deleteRecord(url: any = '', data: any = {}) {
    return this.httpClient.delete(this._apiUrl, data).pipe(map((response: any) => {
      return response;
    }),
      catchError(this.handleError)
    )
  }
  getAll(url: any = '', param: any = {}) {
    let params = new HttpParams();
    if (param) {
      for (let key of Object.keys(param)) {
        params = params.set(key, param[key])
      }
    }
    return this.httpClient.get(this._apiUrl + url, { params: params }).pipe(map((response: any) => {
      return response;
    }),
      catchError(this.handleError)
    );
  }
  handleError(error: HttpErrorResponse) {
    let errorHttpResponse: any = error;
    let iserror = false;
    let message = '';
    if (errorHttpResponse.code == 401) {
      iserror = true;
      message = error.message;
    } else if (errorHttpResponse.code == 404) {
      iserror = true;
      message = errorHttpResponse.message;
    } else if (errorHttpResponse.code == 400) {
      iserror = true;
      message = errorHttpResponse.message;
    } else if (errorHttpResponse.code == 500) {
      iserror = true;
      message = errorHttpResponse.message;
    }
    else if (errorHttpResponse.code == "E_INVALID_NEW_RECORD") {
      iserror = true;
      message = 'You entered invalid Email';
    }

    return throwError(message ? message : 'Something bad happened; please try again later.');
  }
}
