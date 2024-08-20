import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sensors } from 'src/app/core/models/battery';
import { RequestFiler } from 'src/app/core/models/general';
import { BatteryService } from 'src/app/core/services/battery.service';
import { UtilsService } from 'src/app/core/services/utils.service';

@Component({
  selector: 'app-battery-sensors',
  templateUrl: './battery-sensors.component.html',
  styleUrls: ['./battery-sensors.component.scss'],
})
export class BatterySensorsComponent {
  queryParams!: RequestFiler;
  id!: string;
  sensors!: Sensors[];
  totalPage!: number;
  isLoading: boolean = false;

  constructor(
    private batteryService: BatteryService,
    private utilsService: UtilsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';

    this.route.queryParams.subscribe((params) => {
      this.isLoading = true;

      this.queryParams = this.utilsService.convertToRequestFilter(params);
      this.batteryService
        .getBatterySensors({
          id: this.id,
          params: this.queryParams,
        })
        .subscribe((res) => {
          this.sensors = res.result.data;
          this.totalPage = res.result.lastPage;
          this.isLoading = false;
        });
    });
  }
}
