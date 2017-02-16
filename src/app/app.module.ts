import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ResortListComponent } from './components/resort-list/resort-list.component';
import { WeatherForecastComponent } from './components/weather-forecast/weather-forecast.component';
import { FollowInfoComponent } from './components/follow-info/follow-info.component';
import { PhotoListComponent } from './components/photo-list/photo-list.component';
import { ResortActivityPipe } from './components/resort-list/resort-activity.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ResortListComponent,
    WeatherForecastComponent,
    FollowInfoComponent,
    PhotoListComponent,
    ResortActivityPipe

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
