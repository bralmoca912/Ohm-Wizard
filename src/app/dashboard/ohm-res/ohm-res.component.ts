import { Component } from '@angular/core';

@Component({
  selector: 'app-ohm-res',
  standalone: true,
  imports: [],
  templateUrl: './ohm-res.component.html',
  styles: ``
})
export default class OhmResComponent {

  resistencia: number = 0;
  voltaje: number = 0;
  corriente: number = 0;
  potencia: number = 0;

  clacpotencia() {
    this.potencia = this.voltaje * this.corriente;
  }

}
