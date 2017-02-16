import { Component, Input } from '@angular/core';

@Component({
  selector: 'follow-info',
  templateUrl: './follow-info.component.html',
  styleUrls: ['./follow-info.component.css']
})
export class FollowInfoComponent {

  @Input()
  public selectedResort : Resort;

}
