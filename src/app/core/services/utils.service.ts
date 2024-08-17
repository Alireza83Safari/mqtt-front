import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { RequestFiler } from '../models/general';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor() {}

  buildHttpParams(params?: RequestFiler): HttpParams {
    let httpParams = new HttpParams();
    console.log(params);

    if (params) {
      Object.keys(params).forEach((key) => {
        const value = (params as any)[key];
        if (!!value) {
          httpParams = httpParams.append(key, value.toString());
        }
      });
    }
    return httpParams;
  }
}
