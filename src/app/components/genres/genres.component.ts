import { Component, OnInit } from '@angular/core';
import { Discovery } from 'src/app/interfaces/discovery';
import { MovieApiService } from 'src/app/services/movie-api.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Genre } from 'src/app/interfaces/genre';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {
  discovery: Discovery = {};
  genre: Genre = {};

  constructor(
    private movieApiService: MovieApiService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const type = params.get('type');
      const id = params.get('id');
      const page = params.get('page');
      this.getGenre(type, parseInt(id));
      this.getDiscovery(type, id, page);
    });
  }

  getDiscovery(type: string, genre: string, page: string = '1') {
    this.movieApiService.getDiscovery(type, genre, page)
    .subscribe(res => {
      this.discovery = res;
    }, err => {
      console.log(err);
      this.router.navigate(['/trending']);
    });
  }

  getGenre(type: string, id: number) {
    this.movieApiService.getGenres(type)
    .subscribe((res) => {
      res.genres.forEach(genre => {
        if (genre.id === id) {
          this.genre = genre;
        }
      });
    }, err => {
      console.log(err);
      this.router.navigate(['/trending']);
    });
  }
}
