import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  currentPage = 1;
  pagesArray: number[] = [];

  @Input('totalPage') totalPage!: number;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.currentPage = params['page'] ? +params['page'] : 1;
    });
    this.initializePagesArray();
  }

  ngOnChanges(): void {
    this.initializePagesArray();
  }

  initializePagesArray(): void {
    if (this.totalPage) {
      this.pagesArray = Array.from({ length: this.totalPage }, (_, i) => i + 1);
    }
  }

  changePage(page: number) {
    this.currentPage = page;
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { ['page']: page },
    });
  }
}
