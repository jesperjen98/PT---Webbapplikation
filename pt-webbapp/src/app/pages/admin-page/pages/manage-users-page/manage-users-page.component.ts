import { UserService } from '../../../../core/services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-manage-users-page',
  templateUrl: './manage-users-page.component.html',
  styleUrls: ['./manage-users-page.component.scss'],
})
export class ManageUsersPageComponent implements OnInit {
  public users: Array<User> | null = null;
  constructor(private _userService: UserService) {}

  async ngOnInit(): Promise<void> {
    this.users = await this._userService.getAllUsers();
  }
}
