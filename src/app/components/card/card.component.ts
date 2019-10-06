import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() item: Movie;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  select(id: number) {
    this.router.navigate(['/movie', id.toString()]);
  }

}
