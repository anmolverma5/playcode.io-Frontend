import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { JavascriptPlaygroundComponent } from './javascript-playground/javascript-playground.component';
import { TrustedDevsComponent } from './trusted-devs/trusted-devs.component';
import { AboutJavascriptComponent } from './about-javascript/about-javascript.component';
import { NpmPackagesComponent } from './npm-packages/npm-packages.component';
import { FatestLiveViewComponent } from './fatest-live-view/fatest-live-view.component';
import { CodeAutocompleteComponent } from './code-autocomplete/code-autocomplete.component';
import { TryItComponent } from './try-it/try-it.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { EmmetShortcutsComponent } from './emmet-shortcuts/emmet-shortcuts.component';
import { BugFinderComponent } from './bug-finder/bug-finder.component';
import { TypeCheckingComponent } from './type-checking/type-checking.component';
import { DocumentOnHoverComponent } from './document-on-hover/document-on-hover.component';
import { MinimapComponent } from './minimap/minimap.component';
import { PreviewNewWindowComponent } from './preview-new-window/preview-new-window.component';
import { AssetsComponent } from './assets/assets.component';
import { FlexibleLayoutComponent } from './flexible-layout/flexible-layout.component';
import { ColorThemesComponent } from './color-themes/color-themes.component';
import { OldWayNewWayComponent } from './old-way-new-way/old-way-new-way.component';
import { ReadyFrontendComponent } from './ready-frontend/ready-frontend.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';


@NgModule({
  declarations: [
    JavascriptPlaygroundComponent,
    TrustedDevsComponent,
    AboutJavascriptComponent,
    NpmPackagesComponent,
    FatestLiveViewComponent,
    CodeAutocompleteComponent,
    TryItComponent,
    ReviewsComponent,
    EmmetShortcutsComponent,
    BugFinderComponent,
    TypeCheckingComponent,
    DocumentOnHoverComponent,
    MinimapComponent,
    PreviewNewWindowComponent,
    AssetsComponent,
    FlexibleLayoutComponent,
    ColorThemesComponent,
    OldWayNewWayComponent,
    ReadyFrontendComponent,
    HomeLayoutComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
