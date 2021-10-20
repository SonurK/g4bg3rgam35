import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shipping-select',
  templateUrl: './shipping-select.component.html',
  styleUrls: ['./shipping-select.component.scss']
})
export class ShippingSelectComponent implements OnInit {

  public selected: any;

  constructor() { }

  ngOnInit() {
  }

}
