import { Component } from '@angular/core';

@Component({
  selector: 'app-hijo-o',
  standalone: true,
  imports: [],
  templateUrl: './hijo-o.component.html',
  styleUrl: './hijo-o.component.css'
})
export class HijoOComponent {
  private titulo = 'titulo componente hijo'

    get mostrartitulo(){
      return this.titulo;
    }

    getTitulo(){
      return this.titulo;
    }
}
