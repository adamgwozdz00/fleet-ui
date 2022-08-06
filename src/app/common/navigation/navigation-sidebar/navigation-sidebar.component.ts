import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { UsersProductMockService } from 'src/app/sdk/users-product/users-product-mock.service';
import { NavTileDetails } from '../nav-tile-details';

@Component({
  selector: 'navigation-sidebar',
  templateUrl: './navigation-sidebar.component.html',
  styleUrls: ['./navigation-sidebar.component.css'],
})
export class NavigationSidebar implements OnInit {
  navTiles: NavTileDetails[] = [];
  selectedTile: NavTileDetails;

  constructor(private userProductService: UsersProductMockService) {}

  ngOnInit(): void {
    this.userProductService
      .getPages()
      .then((pages) =>
        pages.forEach((userPage) =>
          this.navTiles.push(
            new NavTileDetails(userPage.pageRouting,userPage.pageName)
          )
        )
      );
  }
}
