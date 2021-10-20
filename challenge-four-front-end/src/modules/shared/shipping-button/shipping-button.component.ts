import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shipping-button',
  templateUrl: './shipping-button.component.html',
  styleUrls: ['./shipping-button.component.scss']
})
export class ShippingButtonComponent implements OnInit {


  @Input() buttonTitle: string;
  @Output() buttonClicked = new EventEmitter<any>();


  constructor() { }

  ngOnInit = () => null;

  onClickButton(event) {
    this.buttonClicked.emit(event);
  }

}
