import { Component, HostListener } from '@angular/core';
import { TextBoxComponent } from './text-box/text-box.component';
import { NgIf } from '@angular/common';
import { TableBoxComponent } from './table-box/table-box.component';
import { RadioBoxComponent } from './radio-box/radio-box.component';
import { LinksComponent } from './links/links.component';
import { CheckBoxComponent } from './check-box/check-box.component';
import { ButtonsComponent } from './buttons/buttons.component';

@Component({
  selector: 'app-elements',
  imports: [
    TextBoxComponent,
    NgIf,
    TableBoxComponent,
    RadioBoxComponent,
    LinksComponent,
    CheckBoxComponent,
    ButtonsComponent,
  ],
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
