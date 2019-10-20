import { Component, OnInit } from '@angular/core';
import { MovieApiService } from 'src/app/services/movie-api.service';
import { Trending } from 'src/app/interfaces/trending';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss']
})
export class TrendingComponent implements OnInit {
  trending: Trending = {};
  type = 'movie';

  constructor(
    private movieApiService: MovieApiService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.type = params.get('type');
      const page = params.get('page');
      this.getTrending(this.type, page);
    });
  }

  getTrending(type: string, page: string = '1'): void {
    this.movieApiService.getTrending(type, page)
    .subscribe(res => {
      this.trending = res;
    }, err => {
      console.log(err);
    });
  }

  reachItem(id: number) {
    this.router.navigate([this.type, 'details', id]);
  }
}
