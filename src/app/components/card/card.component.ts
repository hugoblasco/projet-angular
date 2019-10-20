import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';
import { Router } from '@angular/router';
import { TvShow } from 'src/app/interfaces/tv-show';
import { MediaTypeService } from 'src/app/services/media-type.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() item: Movie|TvShow;

  constructor(
    private router: Router,
    private mediaTypeService: MediaTypeService
  ) { }

  ngOnInit() {
  }

  select(id: number) {
    this.router.navigate([this.mediaTypeService.type, 'details', id.toString()]);
  }

}
