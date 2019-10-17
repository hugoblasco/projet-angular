import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Movie } from '../interfaces/movie';
import { GenreList } from '../interfaces/genre-list';
import { Observable } from 'rxjs';

const apiKey = '6ad0c1332948999e8a178c3fd93d2567';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getTrending(type: string) {
    const params = new HttpParams()
    .set('api_key', apiKey);
    return this.httpClient.get('https://api.themoviedb.org/3/trending/' + type + '/day', {params});
  }

  getGenres(type: string): Observable<GenreList> {
    const params = new HttpParams()
    .set('api_key', apiKey);
    return this.httpClient.get('https://api.themoviedb.org/3/genre/' + type + '/list', {params});
  }

  getResults(type: string, query: string, page?: string) {
    const params = new HttpParams()
    .set('api_key', apiKey)
    .set('query', query)
    .set('page', page);
    return this.httpClient.get('https://api.themoviedb.org/3/search/' + type, {params});
  }

  getMovie(id: string): Observable<Movie> {
    const params = new HttpParams()
    .set('api_key', apiKey);
    return this.httpClient.get('https://api.themoviedb.org/3/movie/' + id, {params});
  }
}
