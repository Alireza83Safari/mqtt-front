import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiRoutes } from '../routes/apiRoute';
import { RequestFiler, ServerParams, ServerResponse } from '../models/general';
import { UtilsService } from './utils.service';
import { Observable } from 'rxjs';
import { BaseDevice, Device, Metrics } from '../models/device';

@Injectable({
  providedIn: 'root',
})
export class DeviceService {
  private apiUrl = 'api/v2/';
  constructor(private http: HttpClient, private utilsService: UtilsService) {}

  getDevices(
    params?: RequestFiler
  ): Observable<ServerResponse<ServerParams<BaseDevice[]>>> {
    const httpParams = this.utilsService.buildHttpParams(params);
    return this.http.get<ServerResponse<ServerParams<BaseDevice[]>>>(
      this.apiUrl + ApiRoutes.DEVICES,
      {
        params: httpParams,
      }
    );
  }

  getDevice(
    params?: RequestFiler
  ): Observable<ServerResponse<ServerParams<Device>>> {
    const httpParams = this.utilsService.buildHttpParams(params);
    return this.http.get<ServerResponse<ServerParams<Device>>>(
      this.apiUrl + ApiRoutes.DEVICES,
      {
        params: httpParams,
      }
    );
  }

  getDeviceMetrics({
    params,
    id,
  }: {
    params?: RequestFiler;
    id?: string;
  }): Observable<ServerResponse<ServerParams<Metrics>>> {
    const httpParams = this.utilsService.buildHttpParams(params);
    return this.http.get<ServerResponse<ServerParams<Metrics>>>(
      this.apiUrl + ApiRoutes.DEVICES + `/${id}` + '/metrics',
      {
        params: httpParams,
      }
    );
  }

  getDeviceUserDiscount({
    id,
    data,
  }: {
    id?: string;
    data: { userId: string };
  }): Observable<any> {
    return this.http.post<ServerResponse<any>>(
      this.apiUrl + ApiRoutes.DEVICES + `/${id}` + '/user/discount',
      { data }
    );
  }


  

  editDevice({
    id,
    data,
  }: {
    id: string;
    data: { displayName: string };
  }): Observable<any> {
    return this.http.post<ServerResponse<ServerParams<Device>>>(
      this.apiUrl + ApiRoutes.DEVICES + id + '/edit',
      data
    );
  }
}
