import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { NavTileDetails } from '../nav-tile-details';

@Component({
  selector: 'navigation-sidebar',
  templateUrl: './navigation-sidebar.component.html',
  styleUrls: ['./navigation-sidebar.component.css'],
})
export class NavigationSidebar implements OnInit {
  navTiles: NavTileDetails[] = [];
  selectedTile: NavTileDetails;

  constructor() {
    this.navTiles.push(new NavTileDetails('/fleet', 'Fleet'));
    this.navTiles.push(new NavTileDetails('/reports', 'Reports'));
    this.navTiles.push(new NavTileDetails('/drivers', 'Drivers'));
    this.navTiles.push(new NavTileDetails('/people', 'People'));
    this.navTiles.push(new NavTileDetails('/account', 'Account'));
  }

  ngOnInit(): void {}
}
