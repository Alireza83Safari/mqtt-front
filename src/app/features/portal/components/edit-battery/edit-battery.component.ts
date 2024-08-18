import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BatteryService } from '../../../../core/services/battery.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-battery',
  templateUrl: './edit-battery.component.html',
  styleUrls: ['./edit-battery.component.scss'],
})
export class EditBatteryComponent {
  @Input() isOpen: boolean = false;
  @Input() editBatteryId: string = '';
  @Input() editBatteryForm!: FormGroup;
  @Output() closeModal = new EventEmitter<void>();

  isLoading = false;

  constructor(
    private batteryService: BatteryService,
    private toastrService: ToastrService
  ) {}

  submitEdit() {
    this.isLoading = true;
    this.batteryService
      .editBattery({
        id: this.editBatteryId,
        data: this.editBatteryForm.value,
      })
      .subscribe(
        (res) => {
          if (res.result) {
            this.closeModal.emit();
            this.toastrService.success('Device details updated successfully.');
            this.isLoading = false;
          }
        },
        (err) => {
          this.isLoading = false;
        }
      );
  }
}
