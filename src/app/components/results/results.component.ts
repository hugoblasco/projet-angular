import { Component, OnInit } from '@angular/core';
import { MovieApiService } from 'src/app/services/movie-api.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { SearchResult } from 'src/app/interfaces/search-result';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  responseList: SearchResult = {};
  query = '';

  constructor(
    private movieApiService: MovieApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.query = params.get('query');
      const page = params.get('page');
      this.getResult('movie', this.query, page);
    });
  }

  getResult(type: string, query: string, page?: string) {
    this.movieApiService.getResults(type, query, page)
    .subscribe((res: any) => {
      console.log(res);
      this.responseList = res;
    }, err => {
      console.log(err);
    });
  }

  reachPage(pageNb: number) {
    this.router.navigate(['/results', this.query, pageNb]);
  }
}
