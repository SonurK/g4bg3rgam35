import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-general-cta',
  templateUrl: './general-cta.component.html',
  styleUrls: ['./general-cta.component.scss']
})

export class GeneralCtaComponent implements OnInit {

  @Input() buttonTitle: string;
  @Input() buttonType: string;
  @Output() buttonClicked = new EventEmitter<any>();

  public buttonClass: string = 'primary';

  constructor() { }

  ngOnInit() { };

  ngOnChanges() {
    this.initializeButtonClass();
  }

  initializeButtonClass(): void {
    this.buttonClass = `general-button--${this.buttonType}`;
  }

  onClickButton(event) {
    this.buttonClicked.emit(event);
  }

}
