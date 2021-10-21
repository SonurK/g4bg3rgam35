import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-general-profile',
  templateUrl: './general-profile.component.html',
  styleUrls: ['./general-profile.component.scss']
})
export class GeneralProfileComponent implements OnInit {

  @Input() profileImageUrl: string;
  @Input() profileUserName: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
