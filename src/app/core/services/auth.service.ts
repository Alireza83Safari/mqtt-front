import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login, Register } from '../models/auth';
import { Observable } from 'rxjs';
import { ApiRoutes } from '../routes/apiRoute';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  private apiUrl = 'api/v2/';

  login(data: Login): Observable<any> {
    return this.http.post(this.apiUrl + ApiRoutes.LOGIN, data);
  }

  register(data: Register): Observable<any> {
    return this.http.post(this.apiUrl + ApiRoutes.REGISTER, data);
  }

  logout(): Observable<any> {
    return this.http.post(this.apiUrl + ApiRoutes.LOGOUT, {});
  }
}
