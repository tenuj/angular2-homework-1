import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent {

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
