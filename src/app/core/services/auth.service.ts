import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Login, Register } from '../models/auth';
import { Observable } from 'rxjs';
import { ApiRoutes } from '../routes/apiRoute';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  private apiUrl = environment.apiUrl;

  login(data: Login): Observable<any> {
    console.log(ApiRoutes?.LOGIN);

    return this.http.post(this.apiUrl + ApiRoutes.LOGIN, data);
  }

  register(data: Register): Observable<any> {
    return this.http.post(this.apiUrl + ApiRoutes.REGISTER, data);
  }

  logout(): Observable<any> {
    return this.http.post(this.apiUrl + ApiRoutes.LOGOUT, {});
  }
}
