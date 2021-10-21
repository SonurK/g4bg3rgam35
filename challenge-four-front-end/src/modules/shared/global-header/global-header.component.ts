import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-global-header',
  templateUrl: './global-header.component.html',
  styleUrls: ['./global-header.component.scss']
})
export class GlobalHeaderComponent implements OnInit {

  @Input() logoUrl: string;
  @Input() profileImageUrl: string = '../../../assets/no_image.png';
  @Input() profileUserName: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
