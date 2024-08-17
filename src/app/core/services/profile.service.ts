import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiRoutes } from '../routes/apiRoute';
import { ServerResponse } from '../models/general';
import { Profile } from '../models/profile';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpClient) {}

  apiUrl = 'api/v2/';

  getProfile(): Observable<ServerResponse<Profile>> {
    return this.http.get<ServerResponse<Profile>>(
      this.apiUrl + ApiRoutes.PROFILE
    );
  }
}
