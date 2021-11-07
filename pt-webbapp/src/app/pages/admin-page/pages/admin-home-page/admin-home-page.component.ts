import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-home-page',
  templateUrl: './admin-home-page.component.html',
  styleUrls: ['./admin-home-page.component.scss'],
})
export class AdminHomePageComponent implements OnInit {
  private _toggled: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  openNav() {
    document.getElementById('mySidebar')!.style.width = '250px';
    document.getElementById('main')!.style.marginLeft = '250px';
  }

  closeNav() {
    document.getElementById('mySidebar')!.style.width = '0';
    document.getElementById('main')!.style.marginLeft = '0';
  }

  toggleSideBar() {
    switch (this._toggled) {
      case true:
        document.getElementById('mySidebar')!.style.width = '0';
        // document.getElementById('main')!.style.marginLeft = '0';
        this._toggled = false;
        break;
      case false:
        document.getElementById('mySidebar')!.style.width = '250px';
        // document.getElementById('main')!.style.marginLeft = '250px';
        this._toggled = true;
        break;
    }
  }
}
