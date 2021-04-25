import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRouteModule } from "./app-route.module";
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ImageProfileComponent } from './image-profile/image-profile.component';
import { HeaderComponent } from "./header/header.component";
import { QouteComponent } from './qoute/qoute.component';
import { PortfoiloComponent } from './portfoilo/portfoilo.component';
import { LevelItemComponent } from "./level-item/level-item.component";
import { PortdataService } from "./portdata.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactusComponent,
    ImageProfileComponent,
    HeaderComponent,
    QouteComponent,
    PortfoiloComponent,
    LevelItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRouteModule,
    MatButtonModule
  ],
  providers: [PortdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
