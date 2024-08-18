import {
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() title: string = 'Modal Title';
  @Input() isOpen: boolean = false;
  @Output() closeModal = new EventEmitter<void>();

  @ContentChild('projectedContent') content: ElementRef | undefined;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isOpen']) {
    }
  }

  close() {
    this.isOpen = false;
    this.closeModal.emit();
  }
}
