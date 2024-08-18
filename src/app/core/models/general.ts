export class ServerResponse<T> {
  constructor(public message: string, public result: T) {}
}

export class ServerParams<T> {
  constructor(
    public total: number,
    public page: number,
    public limit: number,
    public lastPage: number,
    public from: number,
    public to: number,
    public data: T
  ) {}
}

export interface RequestFiler {
  page?: number;
  limit?: number;
  searchTerm?: string;
}

export class ChartParams {
  constructor(
    public id: string,
    public fromDate: string,
    public toDate: string,
    public interval: 'second' | 'minute' | 'hour' | 'day' | 'weak' | 'month',
    public intervalValue: number
  ) {}
}
