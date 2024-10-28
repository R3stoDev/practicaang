import { Component } from '@angular/core';

@Component({
  selector: 'app-component-if',
  standalone: true,
  imports: [],
  templateUrl: './component-if.component.html',
  styleUrl: './component-if.component.css'
})
export class ComponentIfComponent {

  isAutenticado: boolean = false;
  alternarAutenticacion():void{
    this.isAutenticado = !this.isAutenticado
  }
}
