import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HeaderComponent } from "../../Componentes/header/header.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InfoEventoTarjetaComponent } from "../../Componentes/info-evento-tarjeta/info-evento-tarjeta.component";

@Component({
    selector: 'app-planos',
    standalone: true,
    templateUrl: './planos.component.html',
    styleUrl: './planos.component.css',
    imports: [HeaderComponent, FormsModule, CommonModule, InfoEventoTarjetaComponent]
})
export class PlanosComponent implements OnInit {
    ngOnInit(): void {
      this.plantaUrl = `./assets/img/${this.selectedPlanta}.jpg`;
      this.isSelecting = false;
    }
    selectedPlanta: string = 'planta1';
    plantaUrl: string = '';
    isSelecting: boolean = false;
    enableSelection: boolean = false;
    selectionStart: { x: number, y: number } = { x: 0, y: 0 };
    selectionRect: { x: number, y: number, width: number, height: number } = { x: 0, y: 0, width: 0, height: 0 };
    zones: any[] = [];
    isModalOpen: boolean = false;
    currentEvent: any = {};
  
    onPlantaChange(): void {
      this.plantaUrl = `./assets/img/${this.selectedPlanta}.jpg`;
      this.isSelecting = false;

    }
  
    startZoneSelection(): void {
      this.enableSelection = true;
      this.isSelecting = false;
    }
  
    startSelection(event: MouseEvent): void {
      if (!this.enableSelection) return;
      this.isSelecting = true;
      this.selectionStart = { x: event.offsetX, y: event.offsetY };
      this.selectionRect = { x: event.offsetX, y: event.offsetY, width: 0, height: 0 };
      const planoElement = document.getElementById('plano');
      if (planoElement) {
        planoElement.classList.add('selecting-mode');
      }
    }
  
    endSelection(event: MouseEvent): void {
      if (!this.enableSelection) return;
      this.isSelecting = false;
      const planoElement = document.getElementById('plano');
      if (planoElement) {
        planoElement.classList.remove('selecting-mode');
      }
      // Agregar la nueva zona seleccionada a la lista de zonas
      this.zones.push({ ...this.selectionRect });
      this.openModal(); // Abrir el modal al finalizar la selección
      this.selectionRect = { x: 0, y: 0, width: 0, height: 0 };
      this.enableSelection = false;
    }
  
    resizeSelection(event: MouseEvent): void {
      if (!this.isSelecting || !this.enableSelection) return;
      this.selectionRect.width = Math.abs(event.offsetX - this.selectionStart.x);
      this.selectionRect.height = Math.abs(event.offsetY - this.selectionStart.y);
      this.selectionRect.x = Math.min(event.offsetX, this.selectionStart.x);
      this.selectionRect.y = Math.min(event.offsetY, this.selectionStart.y);
    }
  
    getSelectionStyle() {
      return {
        left: `${this.selectionRect.x}px`,
        top: `${this.selectionRect.y}px`,
        width: `${this.selectionRect.width}px`,
        height: `${this.selectionRect.height}px`,
        position: 'absolute',
        border: '2px solid red',
        backgroundColor: 'rgba(255, 0, 0, 0.5)'
      };
    }
  
    getZoneStyle(zone: any) {
      return {
        left: `${zone.x}px`,
        top: `${zone.y}px`,
        width: `${zone.width}px`,
        height: `${zone.height}px`,
        position: 'absolute',
        border: '2px solid blue',
        backgroundColor: 'rgba(0, 0, 255, 0.5)'
      };
    }
  
    openModal() {
      this.currentEvent = {
        name: '',
        quantity: 0,
        planta: this.selectedPlanta,
        zone: `${this.selectionRect.x},${this.selectionRect.y},${this.selectionRect.width},${this.selectionRect.height}`
      };
      this.isModalOpen = true;
    }
  
    closeModal() {
      this.isModalOpen = false;
    }
  
    saveEvent(event: any) {
      console.log('Evento guardado:', event);
      // Aquí puedes agregar la lógica para guardar el evento en tu backend o en un servicio
    }

    
}
