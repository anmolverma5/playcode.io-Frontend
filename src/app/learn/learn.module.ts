import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearnRoutingModule } from './learn-routing.module';
import { FrontendPathComponent } from './frontend-path/frontend-path.component';
import { PathLayoutComponent } from './path-layout/path-layout.component';
import { LearnLayoutComponent } from './learn-layout/learn-layout.component';
import { HtmlCssComponent } from './html-css/html-css.component';
import { JavascriptComponent } from './javascript/javascript.component';


@NgModule({
  declarations: [
    FrontendPathComponent,
    PathLayoutComponent,
    LearnLayoutComponent,
    HtmlCssComponent,
    JavascriptComponent
  ],
  imports: [
    CommonModule,
    LearnRoutingModule
  ]
})
export class LearnModule { }
