import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-text-box',
  imports: [],
  templateUrl: './text-box.component.html',
  styleUrl: './text-box.component.css',
})
export class TextBoxComponent {
  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }
}
