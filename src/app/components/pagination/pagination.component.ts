import { Component, OnInit, Input } from '@angular/core';
import { Discovery } from 'src/app/interfaces/discovery';
import { SearchResult } from 'src/app/interfaces/search-result';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() list: Discovery|SearchResult;
  @Input() path: 'string'

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  reachPage(pageNb: number) {
    if (this.list as Discovery) {
      this.router.navigate([this.path, pageNb]);
    } else if (this.list as SearchResult) {
      this.router.navigate([this.path, pageNb]);
    }
  }
}
