import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

const BEGIN_MIDDLE_PAGE = 3;

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnChanges {

  listPage: number[];

  currentPath;

  currentPage;

  @Input('currentPage') routeObj;

  isDisplayPrevious;

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.currentPath = this.routeObj.type;
    this.loadPageList(this.routeObj.page);
  }


  /**
   * Refresh array of page when click page link
   * @param page : page index
   */
  loadPageList(page: number) {
    this.currentPage = page;
    this.listPage = [1, 2, 3, 4, 5];
    this.isDisplayPrevious = false;
    if (page > BEGIN_MIDDLE_PAGE) {
      const increaseUnit = page - this.listPage[BEGIN_MIDDLE_PAGE - 1];
      this.listPage = this.listPage.map(p => {
        return p + increaseUnit;
      });

      // update status button previous
      this.isDisplayPrevious = true;
    }
  }
}
