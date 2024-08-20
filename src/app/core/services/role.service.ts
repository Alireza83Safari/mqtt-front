import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiRoutes } from '../routes/apiRoute';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  constructor(private http: HttpClient) {}

  apiUrl = 'api/v2/';

  getRoles(): Observable<any> {
    return this.http.get(this.apiUrl + ApiRoutes.ROLES);
  }
}
