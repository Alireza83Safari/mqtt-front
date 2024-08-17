import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, UserMenu } from '../models/user';
import { ApiRoutes } from '../routes/apiRoute';
import { ServerResponse } from '../models/general';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl = 'api/v2/';
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  getUser(id: string): Observable<User> {
    return this.http.get<User>(this.apiUrl + `/${id}`);
  }

  getUserMenu(): Observable<ServerResponse<UserMenu[]>> {
    return this.http.get<ServerResponse<UserMenu[]>>(this.apiUrl + ApiRoutes.USER_MENUS);
  }
  
}
