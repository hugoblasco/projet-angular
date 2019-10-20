import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/interfaces/genre';
import { MovieApiService } from 'src/app/services/movie-api.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MediaTypeService } from 'src/app/services/media-type.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  genres: Genre[] = [];

  constructor(
    private movieApiService: MovieApiService,
    private mediaTypeService: MediaTypeService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getGenres('movie');
  }

  getGenres(type: string) {
    this.movieApiService.getGenres(type)
    .subscribe((res) => {
      console.log(res);
      this.genres = res.genres;
    }, err => {
      console.log(err);
    });
  }

  discover(id: number) {
    this.router.navigate([this.mediaTypeService.type, 'genre', id]);
  }

}
