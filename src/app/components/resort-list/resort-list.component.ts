import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ResortsService } from '../../services/resorts.service';
import { Activities } from '../../services/resorts.data';

@Component({
  selector: 'resort-list',
  templateUrl: './resort-list.component.html',
  styleUrls: ['./resort-list.component.css']
})
export class ResortListComponent  {

  public constructor( private resortService : ResortsService )
  {

  }

  @Input()
  public resorts : Resort[];

  @Input()
  public set selectedResort( resort : Resort )
  {
    this.selectedResortValue = resort;

    let resetPhoto : boolean = true;

    if ( this.selectedPhoto )
    {
      if ( resort.photos.indexOf( this.selectedPhoto ) != -1 )
      {
        resetPhoto = false;
      }
    }

    if ( resetPhoto )
    {
      this.selectedPhoto   = resort.photos[ 0 ];
    }
  }

  public get selectedResort() : Resort
  {
    return this.selectedResortValue;
  }

  @Output()
  public onResortChanged = new EventEmitter<Resort>();

  private selectedResortValue : Resort;

  public resortClick( resort : Resort )
  {
    if ( this.selectedResort != resort )
    {
      this.selectedResort = resort;
      this.onResortChanged.emit( resort );
    }
  }

  public selectedPhoto : Photo;

  public onPhotoClick( photo : Photo )
  {
    this.selectedPhoto = photo;
  }

  public selectedActivity : number = Activities.All;

  public changeActivity( activity : number )
  {
    this.selectedActivity = activity;
  }
}
