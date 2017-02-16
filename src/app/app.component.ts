import { Component, OnInit } from '@angular/core';
import { ResortsService } from './services/resorts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ResortsService]
})
export class AppComponent implements OnInit {

  public selectedResort : Resort;
  public resorts        : Resort[];

  public constructor( private resortService : ResortsService )
  {

  }

  public ngOnInit()
  {
    this.resorts        = this.resortService.getResorts();
    this.selectedResort = this.resorts[ 0 ];
  }

  public onResortChanged( resort : Resort )
  {
    this.selectedResort = resort;
  }

}
