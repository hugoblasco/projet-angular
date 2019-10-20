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
  type = '';

  constructor(
    private movieApiService: MovieApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.type = params.get('type');
      this.query = params.get('query');
      const page = params.get('page');
      this.getResult(this.type, this.query, page);
    });
  }

  getResult(type: string, query: string, page: string = '1') {
    this.movieApiService.getResults(type, query, page)
    .subscribe(res => {
      console.log(res);
      this.responseList = res;
    }, err => {
      console.log(err);
      this.router.navigate(['/trending']);
    });
  }
}
