import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BaseDevice } from 'src/app/core/models/device';
import { RequestFiler } from 'src/app/core/models/general';
import { DeviceService } from 'src/app/core/services/device.service';
import { UtilsService } from 'src/app/core/services/utils.service';

@Component({
  selector: 'app-device-table',
  templateUrl: './device-table.component.html',
})
export class DeviceTableComponent implements OnInit {
  isLoading: boolean = false;
  devices: BaseDevice[] = [];
  isShowModal: boolean = false;
  editDeviceForm!: FormGroup;
  editDeviceId: string | null = null;
  totalPage!: number;
  queryParams!: RequestFiler;

  constructor(
    private deviceService: DeviceService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private utilsService: UtilsService
  ) {}

  ngOnInit(): void {
    this.initializeForm();

    this.route.queryParams.subscribe((params) => {
      this.queryParams = this.utilsService.convertToRequestFilter(params);
      this.loadDevices(this.queryParams);
    });
  }

  private initializeForm(): void {
    this.editDeviceForm = this.fb.group({
      displayName: ['', [Validators.required, Validators.maxLength(20)]],
    });
  }

  private loadDevices(params: RequestFiler): void {
    this.isLoading = true;
    this.deviceService.devices$.subscribe((data) => {
      this.devices = data.data;
      this.totalPage = data.lastPage;

      this.isLoading = false;
    });

    this.deviceService.refetchDevices(params);
  }

  showModal(device: BaseDevice): void {
    this.isShowModal = true;
    this.editDeviceId = device.id;
    this.editDeviceForm.patchValue({
      displayName: device.displayName,
    });
  }

  closeModal() {
    this.isShowModal = false;
  }
}
