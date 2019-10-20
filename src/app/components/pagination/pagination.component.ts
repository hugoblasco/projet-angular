import { Component, OnInit, Input } from '@angular/core';
import { Discovery } from 'src/app/interfaces/discovery';
import { SearchResult } from 'src/app/interfaces/search-result';
import { Router } from '@angular/router';
import { Trending } from 'src/app/interfaces/trending';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() list: Discovery|SearchResult|Trending;
  @Input() path: 'string'

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  reachPage(pageNb: number) {
    this.router.navigate([this.path, pageNb]);
  }
}
