import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-datalist',
  templateUrl: './datalist.component.html',
  styleUrls: ['./datalist.component.scss']
})
export class DatalistComponent implements OnInit {
  @Input() results;

  constructor() { }

  ngOnInit() {
  }

}
