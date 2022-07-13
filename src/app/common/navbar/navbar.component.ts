import { Component, OnInit } from '@angular/core';
import { NavTileComponent } from '../nav-tile/nav-tile.component';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {

  navTiles : {route : string, title: string}[] = [];

  constructor() {
    this.navTiles.push({route:"/fleet",title:"Fleet"});
    this.navTiles.push({route:"/reports",title:"Reports"});
    this.navTiles.push({route:"/drivers",title:"Drivers"});
    this.navTiles.push({route:"/people",title:"People"});
    this.navTiles.push({route:"/account",title:"Account"});
  }

  ngOnInit(): void {}
}
