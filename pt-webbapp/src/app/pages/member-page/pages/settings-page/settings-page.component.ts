import { UserService } from './../../../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss'],
})
export class SettingsPageComponent implements OnInit {
  constructor(private _userService: UserService) {}

  ngOnInit(): void {}

  public updateEmail(): void {
    console.log('uppdater');
    this._userService.updateEmail('a@a.com');
  }
}
