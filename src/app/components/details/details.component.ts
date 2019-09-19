import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiService } from 'src/app/services/movie-api.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  movie;

  constructor(
    private movieApiService: MovieApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getMovie(this.route.snapshot.paramMap.get('id'));
  }

  getMovie(id: string) {
    this.movieApiService.getMovie(id)
    .subscribe((res: any) => {
      console.log(res);
      this.movie = res;
    }, err => {
      console.log(err);
    });
  }
}
