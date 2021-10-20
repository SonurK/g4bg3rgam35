import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-shipping-sender-address',
  templateUrl: './shipping-sender-address.component.html',
  styleUrls: ['./shipping-sender-address.component.scss']
})
export class ShippingSenderAddressComponent implements OnInit {

  public shippingSenderAddressForm: FormGroup;
  public errorMark: boolean;

  constructor() {
    this.errorMark = false;
    this.shippingSenderAddressForm = new FormGroup({
      name: new FormControl('', Validators.required),
      street: new FormControl,
      state: new FormControl,
      zip: new FormControl,
      city: new FormControl('', Validators.required)
    })
  }

  ngOnInit() {
  }

  getComponentState() {
    if (!this.shippingSenderAddressForm.valid) {
      this.errorMark = false;
    } else {
      this.errorMark = true;
    }
    return { valid: this.errorMark, form: this.shippingSenderAddressForm.value };
  }

}
