import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ThemeModule } from './theme/theme.module';

const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./theme/theme.module').then((m)=>m.ThemeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
