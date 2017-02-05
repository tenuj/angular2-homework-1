import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Resort }                   from '../../vo/resort';
import { Photo }                    from '../../vo/photo';

@Component({
  selector: 'resortlist',
  templateUrl: './resortlist.component.html',
  styleUrls: ['./resortlist.component.css']
})
export class ResortlistComponent  {

  @Input()
  public resorts : Resort[];

  private _selectedResort : Resort;

  @Input()
  public set selectedResort( resort : Resort )
  {
    this._selectedResort = resort;

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
    return this._selectedResort;
  }

  @Output()
  public onResortChanged = new EventEmitter<Resort>();

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
}
