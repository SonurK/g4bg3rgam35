import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-general-input',
  templateUrl: './general-input.component.html',
  styleUrls: ['./general-input.component.scss']
})
export class GeneralInputComponent implements OnInit {

  @Input() inputTitle: string;
  @Input() inputType: string;

  public values: string = '';
  public inputClass: string = '';

  constructor() { }

  ngOnInit(): void {
    this.initializeInputClass();
  }

  initializeInputClass(): void {
    this.inputClass = `general-input--${this.inputType}`;
  }

  onKey(event: KeyboardEvent) { // with type info
    this.values += (event.target as HTMLInputElement).value + ' | ';
  }

}
