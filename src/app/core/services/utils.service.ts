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
}
