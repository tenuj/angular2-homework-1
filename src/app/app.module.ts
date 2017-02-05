import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ResortlistComponent } from './components/resortlist/resortlist.component';
import { WeatherforecastComponent } from './components/weatherforecast/weatherforecast.component';
import { FollowinfoComponent } from './components/followinfo/followinfo.component';
import { PhotolistComponent } from './components/photolist/photolist.component';


@NgModule({
  declarations: [
    AppComponent,
    ResortlistComponent,
    WeatherforecastComponent,
    FollowinfoComponent,
    PhotolistComponent

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
