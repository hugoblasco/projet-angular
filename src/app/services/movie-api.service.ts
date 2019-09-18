import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

const apiKey = '6ad0c1332948999e8a178c3fd93d2567';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getTrending(type: string) {
    return this.httpClient.get('https://api.themoviedb.org/3/trending/' + type + '/day?api_key=' + apiKey);
  }

  getGenres(type: string) {
    return this.httpClient.get('https://api.themoviedb.org/3/genre/' + type + '/list?api_key=' + apiKey);
  }

  getResults(type: string, query: string) {
    const params = new HttpParams()
    .set('query', query);
    return this.httpClient.get('https://api.themoviedb.org/3/search/' + type + '?api_key=' + apiKey);
  }
}
