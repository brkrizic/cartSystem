import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Chart } from './cart/cart';

@Component({
  selector: 'app-modal',
  imports: [NgIf],
  standalone: true,
  templateUrl: './modal.html',
  styleUrl: './modal.css',
})
export class Modal {
  @Input() title: string = 'Chart';
  @Input() visible: boolean = true;
  @Output() close = new EventEmitter<void>();

  onClose(){
    this.close.emit();
  }

}
