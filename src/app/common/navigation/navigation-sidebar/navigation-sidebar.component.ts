import { Component, OnInit } from '@angular/core';
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
    this.navTiles.push({ route: '/fleet', title: 'Fleet' });
    this.navTiles.push({ route: '/reports', title: 'Reports' });
    this.navTiles.push({ route: '/drivers', title: 'Drivers' });
    this.navTiles.push({ route: '/people', title: 'People' });
    this.navTiles.push({ route: '/account', title: 'Account' });
  }

  ngOnInit(): void {}

  onSelect(tile: NavTileDetails): void {
    this.selectedTile = tile;
  }
}
