import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { ChartParams, RequestFiler } from '../models/general';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor() {}

  buildHttpParams(params?: RequestFiler | ChartParams): HttpParams {
    let httpParams = new HttpParams();

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

  convertToRequestFilter(params: RequestFiler): RequestFiler {
    const filter: RequestFiler = {};
    if (params.page) {
      filter.page = +params.page;
    } else {
      filter.page = 1;
    }
    if (params.limit) {
      filter.limit = +params.limit;
    } else {
      filter.limit = 7;
    }
    if (params.searchTerm) filter.searchTerm = params.searchTerm;
    return filter;
  }

  getCurrentDateTime(offset: number = 0): string {
    const now = new Date();
    now.setDate(now.getDate() + offset);

    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');

    return `${year}-${month}-${day}T${hours}:${minutes}`;
  }
}
