import { MaterialModule } from './material/material.module';
import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BannerComponent } from './views/banner/banner.component';
import { FeatureComponent } from './views/feature/feature.component';
import { CategoriesComponent } from './views/categories/categories.component';
import { LatestAdsComponent } from './views/latest-ads/latest-ads.component';
import { HappyCustomersComponent } from './views/happy-customers/happy-customers.component';
import { DownloadComponent } from './views/download/download.component';
import { AdbyCityComponent } from './views/adby-city/adby-city.component';
import { ContactusComponent } from './views/contactus/contactus.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    FeatureComponent,
    CategoriesComponent,
    LatestAdsComponent,
    HappyCustomersComponent,
    DownloadComponent,
    AdbyCityComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    //MaterialModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
