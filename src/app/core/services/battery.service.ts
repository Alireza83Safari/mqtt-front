import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  ServerResponse,
  RequestFiler,
  ServerParams,
  ChartParams,
} from '../models/general';
import { Battery, Sensors, SensorsChart } from '../models/battery';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiRoutes } from '../routes/apiRoute';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root',
})
export class BatteryService {
  apiUrl = 'api/v2/';
  private initialServerParams: ServerParams<Battery[]> = {
    total: 0,
    page: 1,
    limit: 1,
    lastPage: 1,
    from: 0,
    to: 0,
    data: [],
  };
  private batteriesSubject = new BehaviorSubject<ServerParams<Battery[]>>(
    this.initialServerParams
  );
  batteries$ = this.batteriesSubject.asObservable();

  constructor(private http: HttpClient, private utilsService: UtilsService) {}

  getBatteries(
    params?: RequestFiler
  ): Observable<ServerResponse<ServerParams<Battery[]>>> {
    const httpParams = this.utilsService.buildHttpParams(params);

    return this.http.get<ServerResponse<ServerParams<Battery[]>>>(
      this.apiUrl + ApiRoutes.BATTERY,
      { params: httpParams }
    );
  }

  editBattery({
    id,
    data,
  }: {
    id: string;
    data: { displayName: string };
  }): Observable<any> {
    return this.http.post<any>(
      this.apiUrl + ApiRoutes.BATTERY_EDIT.replace('id', id),
      data
    );
  }

  getBatterySensors({
    params,
    id,
  }: {
    params: RequestFiler;
    id: string;
  }): Observable<ServerResponse<ServerParams<Sensors[]>>> {
    const httpParams = this.utilsService.buildHttpParams(params);

    return this.http.get<ServerResponse<ServerParams<Sensors[]>>>(
      this.apiUrl + ApiRoutes.BATTERY_SENSORS.replace('{id}', id),
      { params: httpParams }
    );
  }

  getBatterySensorsChart({
    params,
    id,
  }: {
    params: ChartParams;
    id: string;
  }): Observable<ServerResponse<SensorsChart[]>> {
    const httpParams = this.utilsService.buildHttpParams(params);

    return this.http.get<ServerResponse<SensorsChart[]>>(
      this.apiUrl + ApiRoutes.BATTERY_SENSORS_CHART.replace('{id}', id),
      { params: httpParams }
    );
  }

  refetchBatteries(params?: RequestFiler) {
    this.getBatteries(params).subscribe((data) =>
      this.batteriesSubject.next(data.result)
    );
  }
}
