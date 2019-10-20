import { Component, OnInit } from '@angular/core';
import { Discovery } from 'src/app/interfaces/discovery';
import { MovieApiService } from 'src/app/services/movie-api.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Genre } from 'src/app/interfaces/genre';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {
  faBars = faBars;
  faTimes = faTimes;
  discovery: Discovery = {};
  genre: Genre = {};

  constructor(
    private movieApiService: MovieApiService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      const page = params.get('page');
      this.getGenre('movie', parseInt(id));
      this.getDiscovery('movie', id, page);
    });
  }

  getDiscovery(type: string, genre: string, page?: string) {
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
