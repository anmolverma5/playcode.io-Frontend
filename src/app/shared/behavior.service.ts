import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { AppStateService } from './app-state.service';

@Injectable({
  providedIn: 'root'
})
export class BehaviorService {
  public userData = new BehaviorSubject<any>(null);
  private routrData = new BehaviorSubject<any>(null);

  rootUrl: string = environment.apiUrl;
  constructor(
    private router: Router,
    private httpclient: HttpClient,
    private injector: Injector,
    public appStateSvc: AppStateService
  ) { }

  signOut(): void{
    this.router.navigateByUrl('/');
    localStorage.removeItem('credentials')
    this.setUserData(null);
  }

  setUserData(data: any){
    if(data){
      let user = JSON.stringify(data);
      localStorage.setItem('credentials', user)
      this.appStateSvc.setState({
        userData: JSON.parse(user)
      })
    }else{
      localStorage.removeItem('credentials')
    }
    this.userData.next(data);
  }


  routerData(data: any): void{
    if(data){
      this.routrData.next(data);
    }
  }
  getRouterData(){
    return this.routrData.asObservable();
  }
  getLocalUser(){
    let data: any;
    let user: any = localStorage.getItem('credentials')
    if(user) data = JSON.parse(user);
    return data;
  }
  getUserData(){
    return this.userData.asObservable();
  }
  
}

