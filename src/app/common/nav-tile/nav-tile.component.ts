import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'nav-tile',
  templateUrl: './nav-tile.component.html',
  styleUrls: ['./nav-tile.component.css'],
})
export class NavTileComponent implements OnInit {
  @Input() navTileRouteLink: string = '';
  @Input() tileTitle: string = '';

  constructor() {}

  ngOnInit(): void {
  }
}
