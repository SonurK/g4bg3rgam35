import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-global-header',
  templateUrl: './global-header.component.html',
  styleUrls: ['./global-header.component.scss']
})
export class GlobalHeaderComponent implements OnInit {

  @Input() logoUrl: string;
  @Input() profileImageUrl: string = '../../../assets/no_image.png';
  @Input() profileUserName: string = '';
  @Input() isSearchIncluded: boolean = false;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void { }

  goToHomepage() {
    this.router.navigate([`homepage`]);
  }

}
