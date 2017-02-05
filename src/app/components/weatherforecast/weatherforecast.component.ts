import { Component, OnInit, Input } from '@angular/core';
import { Location }                 from '../../vo/location';

@Component({
  selector: 'weatherforecast',
  templateUrl: './weatherforecast.component.html',
  styleUrls: ['./weatherforecast.component.css']
})
export class WeatherforecastComponent implements OnInit {

  @Input()
  public location : Location;

  constructor() { }

  ngOnInit() {
  }

}
