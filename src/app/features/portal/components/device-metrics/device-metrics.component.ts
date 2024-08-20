import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Metrics } from 'src/app/core/models/device';
import { RequestFiler } from 'src/app/core/models/general';
import { DeviceService } from 'src/app/core/services/device.service';
import { UtilsService } from 'src/app/core/services/utils.service';

@Component({
  selector: 'app-device-metrics',
  templateUrl: './device-metrics.component.html',
  styleUrls: ['./device-metrics.component.scss'],
})
export class DeviceMetricsComponent implements OnInit {
  queryParams!: RequestFiler;
  id!: string;
  metrics!: Metrics[];
  totalPage!: number;
  isLoading: boolean = false;

  constructor(
    private deviceService: DeviceService,
    private utilsService: UtilsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    console.log(this.metrics);

    this.route.queryParams.subscribe((params) => {
      this.isLoading = true;

      this.queryParams = this.utilsService.convertToRequestFilter(params);
      this.deviceService
        .getDeviceMetrics({
          id: this.id,
          params: this.queryParams,
        })
        .subscribe((res) => {
          console.log(res.result);

          this.metrics = res.result.data;
          this.totalPage = res.result.lastPage;
          this.isLoading = false;
        });
    });
  }
}
