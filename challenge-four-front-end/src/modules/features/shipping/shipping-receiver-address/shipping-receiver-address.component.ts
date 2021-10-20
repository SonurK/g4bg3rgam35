import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-shipping-receiver-address',
  templateUrl: './shipping-receiver-address.component.html',
  styleUrls: ['./shipping-receiver-address.component.scss']
})
export class ShippingReceiverAddressComponent implements OnInit {

  public shippingReceiverAddressForm: FormGroup;
  public errorMark: boolean;

  constructor() {
    this.errorMark = false;
    this.shippingReceiverAddressForm = new FormGroup({
      name: new FormControl,
      street: new FormControl,
      state: new FormControl('', Validators.required),
      zip: new FormControl('', Validators.required),
      city: new FormControl
    })
  }

  ngOnInit() {
  }

  getComponentState() {
    if (!this.shippingReceiverAddressForm.valid) {
      this.errorMark = false;
    } else {
      this.errorMark = true;
    }
    return { valid: this.errorMark, form: this.shippingReceiverAddressForm.value };
  }

}
