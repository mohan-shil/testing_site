import { NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-text-box',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './text-box.component.html',
  styleUrl: './text-box.component.css',
})
export class TextBoxComponent {
  @Output() close = new EventEmitter<void>();
  form: FormGroup;
  submittedData: any = null;

  constructor(private formInfo: FormBuilder) {
    this.form = this.formInfo.group({
      fullName: [''],
      email: [''],
      currentAddress: [''],
      permanentAddress: [''],
    });
  }
  onSubmit() {
    console.log(this.form.value);
    this.submittedData = this.form.value;
  }
  closeModal() {
    this.close.emit();
  }

  closeModalOnOutsideClick(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('modal')) {
      this.closeModal();
    }
  }
}
