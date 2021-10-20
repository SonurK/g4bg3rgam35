import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-shipping-weight',
  templateUrl: './shipping-weight.component.html',
  styleUrls: ['./shipping-weight.component.scss']
})
export class ShippingWeightComponent implements OnInit {

  public weightFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern("^[0-9]*$")
  ]);
  public errorMark: boolean;

  constructor() {
    this.errorMark = false;
  }

  ngOnInit() {
  }

  getComponentState() {
    if (!this.weightFormControl.valid) {
      this.errorMark = false;
    } else {
      this.errorMark = true;
    }
    return { valid: this.errorMark, form: this.weightFormControl.value };
  }

}
