import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InterpolacionComponent } from "./interpolacion/interpolacion.component";
import { PadreComponent } from './padre/padre.component';
import { ListadoProductosComponent } from './listado-productos/listado-productos.component';
import { ProductoComponent } from './listado-productos/producto/producto.component';
import { HijoComponent } from "./padre/hijo/hijo.component";
import { HijoOComponent } from './hijo-o/hijo-o.component';
import { MostrarMesanjeComponent } from "./mostrar-mesanje/mostrar-mesanje.component";
import { ReplicadorComponent } from "./replicador/replicador.component";
import { SaludarComponent } from "./saludar/saludar.component";
import { SumaComponent } from "./suma/suma.component";
import { ComponentIfComponent } from "./component-if/component-if.component";
import { AgregarTareaComponent } from "./agregar-tarea/agregar-tarea.component";
import { ComponenteForComponent } from "./componente-for/componente-for.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InterpolacionComponent, PadreComponent,
    ListadoProductosComponent, ProductoComponent, HijoComponent, HijoOComponent, MostrarMesanjeComponent, ReplicadorComponent, SaludarComponent, SumaComponent, ComponentIfComponent, AgregarTareaComponent, ComponenteForComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test1';
  titulo = 'tienda online'
}
