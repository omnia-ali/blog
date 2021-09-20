import { MaterialModule } from './../material/material.module';
import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SideMenuComponent,
    NavbarComponent,
    FooterComponent,

  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule
  ]
  ,exports:[
    SideMenuComponent,
    NavbarComponent,
    FooterComponent,
    MaterialModule
  ]
})
export class SharedModule { }
