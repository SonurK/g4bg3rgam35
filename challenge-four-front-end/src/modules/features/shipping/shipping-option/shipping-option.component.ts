import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { GET_LIST_ITEMS_NLP } from '../../../../models/shipping-options.model';

@Component({
  selector: 'app-shipping-option',
  templateUrl: './shipping-option.component.html',
  styleUrls: ['./shipping-option.component.css']
})
export class ShippingOptionComponent implements OnInit {

  public listOfOptions: Array<any> = new Array;
  public optionFormControl = new FormControl('', [Validators.required]);
  public errorMark: boolean;

  constructor() {
    this.listOfOptions = GET_LIST_ITEMS_NLP();
    this.errorMark = false;
  }

  ngOnInit() {
  }

  optionSelected(option) {
    console.log("optionSelected", option);
  }

  getComponentState() {
    if (!this.optionFormControl.valid) {
      this.errorMark = false;
    } else {
      this.errorMark = true;
    }
    return { valid: this.errorMark, form: this.optionFormControl.value };
  }

}
