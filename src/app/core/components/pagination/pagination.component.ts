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
      this.initializePagesArray();
    });
  }

  ngOnChanges(): void {
    this.initializePagesArray();
  }

  initializePagesArray(): void {
    const maxVisiblePages = 3;
    const halfVisiblePages = Math.floor(maxVisiblePages / 2);

    if (this.totalPage) {
      if (this.totalPage <= maxVisiblePages) {
        this.pagesArray = Array.from(
          { length: this.totalPage },
          (_, i) => i + 1
        );
      } else {
        const startPage = Math.max(1, this.currentPage - halfVisiblePages);
        const endPage = Math.min(
          this.totalPage,
          this.currentPage + halfVisiblePages
        );

        this.pagesArray = Array.from(
          { length: endPage - startPage + 1 },
          (_, i) => startPage + i
        );

        if (startPage > 1) {
          this.pagesArray.unshift(1);
          if (startPage > 2) {
            this.pagesArray.splice(1, 0, -1);
          }
        }

        if (endPage < this.totalPage) {
          this.pagesArray.push(this.totalPage);
          if (endPage < this.totalPage - 1) {
            this.pagesArray.splice(this.pagesArray.length - 1, 0, -1);
          }
        }
      }
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
