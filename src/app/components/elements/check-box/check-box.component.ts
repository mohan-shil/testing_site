import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-check-box',
  imports: [],
  templateUrl: './check-box.component.html',
  styleUrl: './check-box.component.css',
})
export class CheckBoxComponent {
  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }
}
