import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { ProfileService } from '../../services/profile.service';
import { Profile } from '../../models/profile';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  profileInfo!: Profile;
  constructor(
    private authService: AuthService,
    private toastrService: ToastrService,
    private profileService: ProfileService
  ) {}

  ngOnInit(): void {
    this.profileService
      .getProfile()
      .subscribe((res) => (this.profileInfo = res.result));
  }

  logout() {
    this.authService.logout().subscribe((res) => {
      if (res) {
        this.toastrService.success('You have successfully logged out.');
      }
    });
  }
}
