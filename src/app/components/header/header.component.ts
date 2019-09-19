import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MovieApiService } from 'src/app/services/movie-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  query = '';
  results: [] = [];
  movieGenres: [] = [];
  tvGenres: [] = [];

  constructor(
    private movieApiService: MovieApiService,
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.getMovieGenres();
    this.getTvGenres();
  }

  getMovieGenres() {
    this.movieApiService.getMovieGenres()
    .subscribe((res: any) => {
      console.log(res);
      this.movieGenres = res.genres;
    }, err => {
      console.log(err);
    });
  }

  getTvGenres() {
    this.movieApiService.getMovieGenres()
    .subscribe((res: any) => {
      console.log(res);
      this.tvGenres = res.genres;
    }, err => {
      console.log(err);
    });
  }

  getResults(type: string, query: string) {
    if (query !== '') {
      this.movieApiService.getResults(type, query)
      .subscribe((res: any) => {
        console.log(res);
        this.results = res.results;
        this.changeDetector.detectChanges();
      }, err => {
        console.log(err);
      });
    }
  }
}
