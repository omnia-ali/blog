import { MaterialModule } from './material/material.module';
import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BannerComponent } from './views/banner/banner.component';
import { FeatureComponent } from './views/feature/feature.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    FeatureComponent
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
