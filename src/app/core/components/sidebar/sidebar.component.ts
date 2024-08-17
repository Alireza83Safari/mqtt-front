import { Component, OnInit } from '@angular/core';
import { PrivateRoutes } from '../../routes/pageRoutes';
import { UserService } from '../../services/user.service';
import { UserMenu } from '../../models/user';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  public pageRoutes!: PrivateRoutes;
  menuItems!: UserMenu[];

  constructor(private UserService: UserService) {}

  ngOnInit(): void {
    this.UserService.getUserMenu().subscribe(
      (res) => (this.menuItems = res.result)
    );
  }
}
