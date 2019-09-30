import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MovieApiService } from 'src/app/services/movie-api.service';
import { Movie } from 'src/app/interfaces/movie';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  movie: Movie = {};
  departmentId: string;

  constructor(
    private movieApiService: MovieApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      this.getMovie(id);
    });
  }

  getMovie(id: string) {
    this.movieApiService.getMovie(id)
    .subscribe(res => {
      console.log(res);
      this.movie = res;
    }, err => {
      console.log(err);
    });
  }
}
