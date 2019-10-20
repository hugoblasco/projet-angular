import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MediaTypeService {
  type = 'movie';

  constructor() { }

  switchMediaType() {
    if (this.type === 'movie') {
      this.type = 'tv';
    } else {
      this.type = 'movie';
    }
    console.log("type = " + this.type);
  }
}
