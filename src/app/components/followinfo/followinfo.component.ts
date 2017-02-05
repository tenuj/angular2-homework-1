import { Component, OnInit, Input } from '@angular/core';
import { Resort }                   from '../../vo/resort';

@Component({
  selector: 'followinfo',
  templateUrl: './followinfo.component.html',
  styleUrls: ['./followinfo.component.css']
})
export class FollowinfoComponent implements OnInit {

  @Input()
  public selectedResort : Resort;

  constructor() { }

  ngOnInit() {
  }

}
