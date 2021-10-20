import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shipping-label',
  templateUrl: './shipping-label.component.html',
  styleUrls: ['./shipping-label.component.css']
})
export class ShippingLabelComponent implements OnInit {

  @Input() objectShippingResult: string;

  public result;

  constructor() { }

  ngOnInit() {
    this.result = JSON.stringify(this.objectShippingResult, undefined, 2);
  }

}
