import { Component, HostListener } from '@angular/core';
import { TextBoxComponent } from './text-box/text-box.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-elements',
  imports: [TextBoxComponent, NgIf],
  templateUrl: './elements.component.html',
  styleUrl: './elements.component.css',
})
export class ElementsComponent {
  activeModal: string | null = null;
  openModal(modalName: string) {
    this.activeModal = modalName;
  }
  closeModal() {
    this.activeModal = null;
  }
  @HostListener('document:keydown.escape', ['$event'])
  handleEscapeKey(event: KeyboardEvent) {
    this.closeModal();
  }
}
