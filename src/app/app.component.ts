import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fleet-ui';
  detailsTab: string[] = ['Driver History', 'Insurance History', 'Review History', 'Current Review', 'Current Insurance']

  console(i: number) {
    console.log(i)
  }

  isOpenSidebar: boolean = false;

  openSidebar() {
    this.isOpenSidebar = true;
  }

  onCloseSidebar() {
    this.isOpenSidebar = false;
  }


  isOpenConfirmSidebar: boolean = false;

  openConfirmSidebar() {
    this.isOpenConfirmSidebar = true;
  }

  onCloseConfirmSidebar() {
    this.isOpenConfirmSidebar = false;
  }
}
