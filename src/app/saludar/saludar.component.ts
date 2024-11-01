import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UniversalTableComponent } from '../universal-table/universal-table.component';

@Component({
  selector: 'app-saludar',
  standalone: true,
  imports: [FormsModule,UniversalTableComponent],
  templateUrl: './saludar.component.html',
  styleUrl: './saludar.component.css'
})
export class SaludarComponent {
  saludo = 'salido mimi'

  users: User[] = [
    { id: 1, name: 'Juan', email: 'juan@example.com',telefono: 3234324,direccion:3423432 },
    { id: 2, name: 'Maria', email: 'maria@example.com', telefono:43423432,direccion:543534534 },
  ];

  userColumns = [
    { key: 'id' as const, header: 'ID' },
    { key: 'name' as const, header: 'Name' },
    { key: 'email' as const, header: 'Email' },
    { key: 'telefono' as const, header: 'Telefono' },
    { key: 'direccion' as const, header: 'dire' }

  ];

  onRowSelected(row: User) {
    console.log('Row selected:', row);
  }

  onRowDeleted(row: User) {
    this.users = this.users.filter(user => user.id !== row.id);
    console.log('Row deleted:', row);
  }
}
interface User {
  id: number;
  name: string;
  email: string;
  telefono:number;
  direccion:number;
}
