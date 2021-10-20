import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-product-addition',
  templateUrl: './product-addition.component.html',
  styleUrls: ['./product-addition.component.scss']
})
export class ProductAdditionComponent implements OnInit {

  @Input() objectComponentBuilder: any;
  @Output() productAdditionAddProduct = new EventEmitter<string>();

  public additionFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern("^[0-9]*$")
  ]);
  events: string[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log("objectComponentBuilder", this.objectComponentBuilder);
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
    console.log("addEvent this.events", this.events);
    
  }

}
