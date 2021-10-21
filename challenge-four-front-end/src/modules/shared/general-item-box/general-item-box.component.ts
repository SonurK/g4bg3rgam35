import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-general-item-box',
  templateUrl: './general-item-box.component.html',
  styleUrls: ['./general-item-box.component.scss']
})
export class GeneralItemBoxComponent implements OnInit {

  private className = 'general-item-box';

  @Input() itemImageUrl: string = '';
  @Input() itemText: string;
  @Input() itemType: string = '';
  @Input() itemBoxColor: string = 'green';
  @Input() itemBoxOrientation: string = 'bottom';

  constructor() { }

  ngOnInit(): void {
    this.initializeItemBoxClass();
    this.initializeImage();
  }

  initializeImage() {
    if (!this.itemImageUrl) this.itemImageUrl = '../../../assets/no_image.png';
  }

  initializeItemBoxClass() {
    this.itemType = `${this.className}--${this.itemType}`;
    this.itemBoxColor = `${this.className}-image--description__${this.itemBoxColor}`;
    this.itemBoxOrientation = `${this.className}-image--description--${this.itemBoxOrientation}`;
  }

}
