import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DeviceService } from '../../../../core/services/device.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-device',
  templateUrl: './edit-device.component.html',
  styleUrls: ['./edit-device.component.scss'],
})
export class EditDeviceComponent {
  @Input() isOpen = false;
  @Input() editDeviceForm!: FormGroup;
  @Input() editDeviceId = '';
  @Output() closeModal = new EventEmitter<void>();

  isLoading = false;

  constructor(
    private deviceService: DeviceService,
    private toastrService: ToastrService
  ) {}

  submitEditDevice() {
    this.isLoading = true;
    this.deviceService
      .editDevice({ id: this.editDeviceId, data: this.editDeviceForm.value })
      .subscribe(
        (res) => {
          if (res.result) {
            this.closeModal.emit();
            this.toastrService.success('Device details updated successfully.');
            this.deviceService.refetchDevices();
            this.isLoading = false;
          }
        },
        () => {
          this.isLoading = false;
        }
      );
  }
}
