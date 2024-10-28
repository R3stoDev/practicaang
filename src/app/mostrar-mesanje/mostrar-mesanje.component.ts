import { Component } from '@angular/core';

@Component({
  selector: 'app-mostrar-mesanje',
  standalone: true,
  imports: [],
  templateUrl: './mostrar-mesanje.component.html',
  styleUrl: './mostrar-mesanje.component.css'
})
export class MostrarMesanjeComponent {
mensaje: string='';
resetearmensaje() {
  this.mensaje = ''

}
mostrarmensaje() {
this.mensaje= 'hola, has hecho click en el boton'
}

}
