import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Battery } from 'src/app/core/models/battery';
import { RequestFiler } from 'src/app/core/models/general';
import { BatteryService } from 'src/app/core/services/battery.service';
import { UtilsService } from 'src/app/core/services/utils.service';

@Component({
  selector: 'app-battery-table',
  templateUrl: './battery-table.component.html',
  styleUrls:['./battery-table.component.scss']
})
export class BatteryTableComponent implements OnInit {
  batteries!: Battery[];
  editBatteryId!: string;
  isOpen!: boolean;
  editForm!: FormGroup;
  isLoading = false;
  queryParams!: RequestFiler;
  totalPage!: number;

  constructor(
    private batteryService: BatteryService,
    private fb: FormBuilder,
    private utilsService: UtilsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeForm();

    this.route.queryParams.subscribe((params) => {
      this.queryParams = this.utilsService.convertToRequestFilter(params);
      this.loadBatteries(this.queryParams);
    });
  }

  initializeForm() {
    this.editForm = this.fb.group({
      displayName: ['', [Validators.required, Validators.maxLength(20)]],
    });
  }

  loadBatteries(params?: RequestFiler) {
    this.isLoading = true;

    this.batteryService.batteries$.subscribe(
      (response) => {
        this.batteries = response.data;
        this.totalPage = response.lastPage;
        this.isLoading = false;
      },
      () => {
        this.isLoading = false;
      }
    );

    this.batteryService.refetchBatteries(params);
  }

  showModal(battery: Battery) {
    this.isOpen = true;
    this.editBatteryId = battery.id;

    this.editForm.patchValue({
      displayName: battery.displayName,
    });
  }

  closeModal() {
    this.isOpen = false;
  }

  navigateToBatteryDetails(id: string) {
    this.router.navigate([`/portal/battery/${id}/sensor`]);
  }
}
