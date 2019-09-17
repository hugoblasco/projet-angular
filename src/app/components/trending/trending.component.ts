import { Component, OnInit } from '@angular/core';
import { MovieApiService } from 'src/app/services/movie-api.service';

@Component({
  selector: 'app-test',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss']
})
export class TrendingComponent implements OnInit {
  trending = [];

  constructor(
    private movieApiService: MovieApiService
  ) { }

  ngOnInit() {
    this.getTrending();
  }

  getTrending() {
    this.movieApiService.getTrending()
    .subscribe((res: any) => {
      console.log(res);
      this.trending = res.results;
    }, err => {
      console.log(err);
    });
  }
}