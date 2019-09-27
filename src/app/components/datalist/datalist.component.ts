import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-datalist',
  templateUrl: './datalist.component.html',
  styleUrls: ['./datalist.component.scss']
})
export class DatalistComponent implements OnInit {
  @Input() results: [];
  @Output() selectEvent = new EventEmitter<boolean>();
  @Output() mouseEvent = new EventEmitter<boolean>();

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSelect(id: string, event: boolean) {
    this.router.navigate(['/movie', id]);
    this.selectEvent.emit(event);
  }

  sendMouse(val: boolean) {
    this.mouseEvent.emit(val);
  }

}
