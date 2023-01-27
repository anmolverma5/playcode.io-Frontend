import { Injectable } from '@angular/core';
import { StateData } from './common';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  private state: StateData | any;
  constructor() { }
  set stateData(state){
    this.state = state;
  }
  get stateData(){
    return this.state;
  }
  public setState(state: Partial<StateData>){
    this.state = { ...this.state, ...state};
  }
}
