import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  imports: [],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.css',
})
export class ButtonsComponent {
  @Output() close = new EventEmitter<void>();
  closeModal() {
    this.close.emit();
  }
}
