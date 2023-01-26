import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: '',
				redirectTo: 'home',
				pathMatch: 'full',
      },
      {
        path: '',
        loadChildren: () => import('../home/home.module').then((m)=>m.HomeModule)
      },
      {
        path: 'learn',
        loadChildren: () => import('../learn/learn.module').then((m)=>m.LearnModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeRoutingModule { }
