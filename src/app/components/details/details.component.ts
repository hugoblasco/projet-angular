import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { MovieApiService } from 'src/app/services/movie-api.service';
import { Movie } from 'src/app/interfaces/movie';
import { TvShow } from 'src/app/interfaces/tv-show';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  item: Movie|TvShow = {};
  departmentId: string;
  type = '';

  constructor(
    private movieApiService: MovieApiService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.type = params.get('type');
      const id = params.get('id');
      this.getItem(this.type, id);
    });
  }

  getItem(type: string, id: string) {
    if (type === 'movie') {
      this.movieApiService.getMovie(id)
      .subscribe(res => {
        this.item = res;
      }, err => {
        console.log(err);
      });
    } else {
      this.movieApiService.getTvShow(id)
      .subscribe(res => {
        this.item = res;
      }, err => {
        console.log(err);
      });
    }
  }
}
