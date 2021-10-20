import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { GET_PRODUCTS_MOCKS } from '../../../../models/products-mocks.model';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-product-resume',
  templateUrl: './product-resume.component.html',
  styleUrls: ['./product-resume.component.scss']
})
export class ProductResumeComponent implements OnInit {

  public filteredOptions: Observable<string[]>;
  public options: string[] = ['Example', 'Here', 'There', 'And', 'Something Else', 'Again', 'Movie', 'Song'];
  public weightFormControl = new FormControl('', [
    Validators.required
  ]);

  public displayedColumns: string[] = ['name', 'date', 'size'];
  public objectComponentResume: any = {
    name: "title",
    description: "description is here"
  }
  public products;

  constructor() {
    this.products = GET_PRODUCTS_MOCKS();
  }

  ngOnInit(): void {
    console.log("this.products", this.products);
    this.filteredOptions = this.weightFormControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

}
