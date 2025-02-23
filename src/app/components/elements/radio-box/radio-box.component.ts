import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-radio-box',
  imports: [],
  templateUrl: './radio-box.component.html',
  styleUrl: './radio-box.component.css',
})
export class RadioBoxComponent {
  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }
}
