import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Permissions } from '../enums/Persmissions';
import { ProfileService } from './profile.service';
import { PageRoutes } from '../routes/pageRoutes';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private profileService: ProfileService) {}
  readonly url = window.location.href;

  canActivate(): Observable<boolean> {
    return this.profileService.getProfile().pipe(
      map((response) => this.handleAuth(response?.result?.permissions)),
      catchError(() => {
        this.router.navigate(['/auth/login']);
        return of(true);
      })
    );
  }

  private handleAuth(permissions: string[]): boolean {
    if (!this.checkPermissions(permissions)) {
      this.router.navigate(['/auth/login']);
      return false;
    }

    return true;
  }

  private checkPermissions(userPermissions: string[]): boolean {
    const requiredPermission = this.getRequiredPermission(userPermissions);
    return requiredPermission;
  }

  private getRequiredPermission(userPermissions: string[]): boolean {
    const permissionMapping = {
      [PageRoutes.BATTERY]: Permissions.BATTERY_LIST,
      [PageRoutes.DEVICE]: Permissions.DEVICE_LIST,
      [PageRoutes.USER]: Permissions.USER_LIST,
      [PageRoutes.ROLE]: Permissions.ROLE_LIST,
    };

    return Object.entries(permissionMapping).some(
      ([route, permission]) =>
        this.url.includes(route) && userPermissions.includes(permission)
    );
  }
}
