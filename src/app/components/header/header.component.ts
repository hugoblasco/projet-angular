import { Component, OnInit } from '@angular/core';
import { MovieApiService } from 'src/app/services/movie-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  query = '';
  results = [];

  constructor(
    private movieApiService: MovieApiService
  ) { }

  ngOnInit() {
  }

  getResults(type: string, query: string) {
    this.movieApiService.getResults(type, query)
    .subscribe((res: any) => {
      console.log(res);
      this.results = res.results;
    }, err => {
      console.log(err);
    });
  }
}
