import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-links',
  imports: [],
  templateUrl: './links.component.html',
  styleUrl: './links.component.css',
})
export class LinksComponent {
  @Output() close = new EventEmitter<void>();
  closeModal() {
    this.close.emit();
  }
}
