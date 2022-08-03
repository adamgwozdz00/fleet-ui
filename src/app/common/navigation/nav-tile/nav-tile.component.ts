import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nav-tile',
  templateUrl: './nav-tile.component.html',
  styleUrls: ['./nav-tile.component.css'],
})
export class NavTileComponent implements OnInit, OnChanges {
  @Input() navTileRouteLink: string = '';
  @Input() tileTitle: string = '';
  active: boolean = false;

  constructor(private router: Router) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.router.url == this.navTileRouteLink) {
      this.active = true;
      return;
    }
    this.active = false;
  }

  ngOnInit(): void {}
}
