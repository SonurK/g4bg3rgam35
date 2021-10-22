import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GET_CATEGORIES_MOCKS } from '../../../models/categories-mocks.model';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  public strapiUrl: string = 'http://localhost:1337';
  public categories: Array<any> = [];

  constructor(
    private router: Router,
  ) {
    this.categories = GET_CATEGORIES_MOCKS();
  }

  ngOnInit(): void {
    this.initializeCategories();
  }

  initializeCategories() {
    if (this.categories && this.categories.length > 3) {
      this.categories = this.categories.slice(0, 4);
    }
  }

  getItemBoxColor(index: number) {
    return index % 2 === 0 ? 'green' : 'purple';
  }

  getItemImageUrl(url: string) {
    return url ? `${this.strapiUrl}${url}` : null;
  }

  viewMoreProducts() {
    this.router.navigate([`category`]);
  }

}
