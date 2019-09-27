import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MovieApiService } from 'src/app/services/movie-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  query = '';
  results: [] = [];
  movieGenres: [] = [];
  tvGenres: [] = [];
  focus = true;
  mouse = true;
  select = false;


  constructor(
    private movieApiService: MovieApiService,
    private changeDetector: ChangeDetectorRef
  ) { }

  onBlur() {
    this.focus = true;
    console.log('focus = ' + this.focus);
  }

  onFocus() {
    this.select = false;
    this.focus = false;
    console.log('focus = ' + this.focus);
  }

  ngOnInit() {
    this.getMovieGenres();
    this.getTvGenres();
  }

  getMovieGenres() {
    this.movieApiService.getMovieGenres()
    .subscribe((res: any) => {
      console.log(res);
      this.movieGenres = res.genres;
    }, err => {
      console.log(err);
    });
  }

  getTvGenres() {
    this.movieApiService.getTvGenres()
    .subscribe((res: any) => {
      console.log(res);
      this.tvGenres = res.genres;
    }, err => {
      console.log(err);
    });
  }

  getResults(type: string, query: string) {
    if (query !== '') {
      this.movieApiService.getResults(type, query)
      .subscribe((res: any) => {
        console.log(res);
        this.results = res.results;
        this.changeDetector.detectChanges();
      }, err => {
        console.log(err);
      });
    }
  }

  onSelect(val: boolean) {
    this.select = val;
    this.query = '';
    console.log('select = ' + this.select);
  }

  onMouse(val: boolean) {
    this.mouse = val;
    console.log('mouse = ' + this.mouse);
  }

  hideDataList(): boolean {
    return (this.focus && this.mouse) || this.select;
  }
}
