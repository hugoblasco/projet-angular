import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';
import { MovieApiService } from 'src/app/services/movie-api.service';
import { Router } from '@angular/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss']
})
export class SearchFieldComponent implements OnInit {
  faSearch = faSearch;
  results: Movie[] = [];
  mouseOverDataList = false;
  hiddenDataList = true;
  query: string;

  constructor(
    private movieApiService: MovieApiService,
    private changeDetector: ChangeDetectorRef,
    private router: Router
  ) { }

  ngOnInit() {
  }

  getResults(type: string) {
    if (this.query !== '') {
      this.movieApiService.getResults(type, this.query)
      .subscribe((res: any) => {
        console.log(res);
        this.results = res.results.slice(0, 6);
        this.changeDetector.detectChanges();
      }, err => {
        console.log(err);
      });
    } else {
      this.results = [];
    }
  }

  hideDataList(focusOn: boolean) {
    if (focusOn || this.mouseOverDataList) {
      this.hiddenDataList = false;
    } else {
      this.hiddenDataList = true;
    }
  }

  select(id: string) {
    this.router.navigate(['/movie', id]);
    this.query = '';
    this.results = [];
  }

  search(key = 'Enter') {
    if (this.query !== '' && key === 'Enter') {
      this.router.navigate(['/results', this.query]);
      this.query = '';
      this.results = [];
    }
  }
}
