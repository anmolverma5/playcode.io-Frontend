import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPricingComponent } from './layout-pricing/layout-pricing.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPricingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PricingRoutingModule { }
