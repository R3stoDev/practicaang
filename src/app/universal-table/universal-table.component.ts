import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-universal-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './universal-table.component.html',
  styleUrl: './universal-table.component.css'
})
export class UniversalTableComponent<T> {

    // Array de datos a mostrar en la tabla
    @Input() data: T[] = [];
  
    // Columnas de la tabla, donde 'key' es el nombre de la propiedad y 'header' es el título mostrado
    @Input() columns: { key: keyof T; header: string }[] = [];
    
    // Evento para manejar la selección de filas
    @Output() rowSelected = new EventEmitter<T>();
    
    // Evento para manejar la acción de eliminar
    @Output() rowDeleted = new EventEmitter<T>();
  
    // Método para emitir el evento de selección de fila
    selectRow(row: T) {
      this.rowSelected.emit(row);
    }
  
    // Método para emitir el evento de eliminación de fila
    deleteRow(row: T) {
      this.rowDeleted.emit(row);
    }
}
