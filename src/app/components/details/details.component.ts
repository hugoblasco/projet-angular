import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { MovieApiService } from 'src/app/services/movie-api.service';
import { MovieInterface } from 'src/app/interfaces/movie.interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  movie: MovieInterface;
  departmentId: string;

  constructor(
    private movieApiService: MovieApiService,
    private route: ActivatedRoute,
    private router: Router
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
