import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  imports: [
    FormsModule
  ],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  n1: number = 0;
  n2: number = 0;
  resultado: number = 0;

  suma(): void{
    this.resultado = this.n1 + this.n2;
  }
  resta(): void{
    this.resultado = this.n1 - this.n2;
  }
  multiplicacion(): void{
    this.resultado = this.n1 * this.n2;
  }
  division(): void{
    if(this.n2!=0){
      this.resultado = this.n1 / this.n2;
    }else{
      alert("No se puede dividir por cero");
    }
  }
}
