import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-table-box',
  imports: [],
  templateUrl: './table-box.component.html',
  styleUrl: './table-box.component.css',
})
export class TableBoxComponent {
  @Output() close = new EventEmitter<void>();
  closeModal() {
    this.close.emit();
  }
}
