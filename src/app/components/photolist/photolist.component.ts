import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Photo } from '../../vo/photo';

@Component({
  selector: 'photolist',
  templateUrl: './photolist.component.html',
  styleUrls: ['./photolist.component.css']
})
export class PhotolistComponent {

  @Input()
  public photos: Photo[];


  @Input()
  public selectedPhoto : Photo;

  @Output()
  public onPhotoClick = new EventEmitter<Photo>();

  public photoClick( photo : Photo )
  {
    if ( this.selectedPhoto != photo )
    {
      this.onPhotoClick.emit( photo );
    }
  }

}
