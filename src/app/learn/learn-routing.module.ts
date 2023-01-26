import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LearnLayoutComponent } from './learn-layout/learn-layout.component';

const routes: Routes = [
  {
    path: '',
    component: LearnLayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearnRoutingModule { }
