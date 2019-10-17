import { Component, OnInit } from '@angular/core';
import { MovieApiService } from 'src/app/services/movie-api.service';
import { Movie } from 'src/app/interfaces/movie';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss']
})
export class TrendingComponent implements OnInit {
  faBars = faBars;
  faTimes = faTimes;
  trending: Movie[] = [];
  sideBarVisible = false;

  constructor(
    private movieApiService: MovieApiService
  ) { }

  ngOnInit() {
    this.getTrending('movie');
  }

  getTrending(type: string) {
    this.movieApiService.getTrending(type)
    .subscribe((res: any) => {
      console.log(res);
      this.trending = res.results;
    }, err => {
      console.log(err);
    });
  }

  triggerSideBar() {
    this.sideBarVisible = !this.sideBarVisible;
  }
}
