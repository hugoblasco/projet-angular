import { Component, OnInit } from '@angular/core';
import { MediaTypeService } from 'src/app/services/media-type.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  type = 'movie';

  constructor(
    private mediaTypeService: MediaTypeService,
    private router: Router
  ) { }

  ngOnInit() {
    this.type = this.mediaTypeService.type;
    this.reachTrending();
  }

  switchMediaType() {
    this.mediaTypeService.switchMediaType();
    this.type = this.mediaTypeService.type;
    this.reachTrending();
  }

  reachTrending() {
    this.router.navigate([this.type, 'trending', '1']);
  }
}
