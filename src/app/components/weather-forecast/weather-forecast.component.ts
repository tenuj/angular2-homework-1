import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css']
})
export class WeatherForecastComponent {

  @Input()
  public location : LocationData;

}
