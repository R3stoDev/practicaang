import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-suma',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './suma.component.html',
  styleUrl: './suma.component.css'
})
export class SumaComponent {
sumar() {
  this.resultado=this.operadora1 + this.operadora2
}
operadora1: number=0;
operadora2:number=0;
resultado: number =0;


}
