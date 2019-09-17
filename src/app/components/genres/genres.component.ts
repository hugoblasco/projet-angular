import { Component, OnInit } from '@angular/core';
import { MovieApiService } from 'src/app/services/movie-api.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {
  genres = [];

  constructor(
    private movieApiService: MovieApiService
  ) { }

  ngOnInit() {
    this.getGenres('movie');
  }

  getGenres(type: string) {
    this.movieApiService.getGenres(type)
    .subscribe((res: any) => {
      console.log(res);
      this.genres = res.genres;
    }, err => {
      console.log(err);
    });
  }
}
