import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  standalone: true,
  imports: [],
  templateUrl: './interpolacion.component.html',
  styleUrl: './interpolacion.component.css'
})
export class InterpolacionComponent {
  titulo = 'universidad angulat';
  usuario ={
    nombre: 'edwin morales',
    edad: 53
  }
  saludar(){
    return `hola ${this.usuario.nombre}`;
  }
}
