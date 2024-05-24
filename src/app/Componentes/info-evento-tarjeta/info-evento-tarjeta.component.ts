import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-info-evento-tarjeta',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './info-evento-tarjeta.component.html',
  styleUrl: './info-evento-tarjeta.component.css'
})
export class InfoEventoTarjetaComponent {
  @Input() event: any = {};
  @Output() closeModal = new EventEmitter<void>();
  @Output() saveEvent = new EventEmitter<any>();

  close() {
    this.closeModal.emit();
  }

  save() {
    this.saveEvent.emit(this.event);
    this.close();
  }
}
