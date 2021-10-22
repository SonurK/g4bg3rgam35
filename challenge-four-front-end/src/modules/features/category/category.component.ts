import { Component, OnInit } from '@angular/core';
import { GET_CATEGORIES_MOCKS } from '../../../models/categories-mocks.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  public strapiUrl: string = 'http://localhost:1337';
  public categories: Array<any> = [];

  constructor() {
    this.categories = GET_CATEGORIES_MOCKS();
  }

  ngOnInit(): void { }

  getItemBoxColor(index: number) {
    return index % 2 === 0 ? 'green' : 'purple';
  }

  getItemImageUrl(url: string) {
    return url ? `${this.strapiUrl}${url}` : null;
  }

}
