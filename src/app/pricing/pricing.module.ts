import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PricingRoutingModule } from './pricing-routing.module';
import { TopSectionComponent } from './top-section/top-section.component';
import { PricingComponent } from './pricing/pricing.component';
import { PlansFeaturesComponent } from './plans-features/plans-features.component';
import { QuestionsAnswersComponent } from './questions-answers/questions-answers.component';
import { LayoutPricingComponent } from './layout-pricing/layout-pricing.component';


@NgModule({
  declarations: [
    TopSectionComponent,
    PricingComponent,
    PlansFeaturesComponent,
    QuestionsAnswersComponent,
    LayoutPricingComponent
  ],
  imports: [
    CommonModule,
    PricingRoutingModule
  ]
})
export class PricingModule { }
