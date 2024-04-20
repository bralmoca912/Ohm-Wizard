import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { TitleComponent } from '../../shared/title/title.component';

@Component({
  selector: 'app-ohm-res',
  standalone: true,
  imports: [FormsModule, TitleComponent],
  templateUrl: './ohm-res.component.html',
  styles: ``
})
export default class OhmResComponent {

  ////* Calculadora de Resistencia *////
  voltaje_r: any = 698741236568646;
  corriente_r: any = 1;
  resistencia_r: any = undefined;
  sufijo_r: string = '[Ohm]';
  calcresistencia(): void {
    this.resistencia_r = this.voltaje_r! / this.corriente_r!;
    if (this.resistencia_r < 0) {
      this.resistencia_r = 'No existe';
    }
    if (this.resistencia_r >= 1000000000000) {
      this.resistencia_r = 'Infinity';
    }
    if (this.resistencia_r >= 1000000000) {
      this.resistencia_r = parseFloat((this.resistencia_r / 1000000000).toFixed(2));
      this.sufijo_r = '[GOhm]'
    }
    else if (this.resistencia_r >= 1000000) {
      this.resistencia_r = parseFloat((this.resistencia_r / 1000000).toFixed(2));
      this.sufijo_r = '[MOhm]'
    }
    else if (this.resistencia_r >= 1000) {
      this.resistencia_r = parseFloat((this.resistencia_r / 1000).toFixed(2));
      this.sufijo_r = '[KOhm]'
    }
    else {
      this.resistencia_r = parseFloat((this.resistencia_r).toFixed(2));
      this.sufijo_r = '[Ohm]'
    }
  }

  ////* Calculadora de Voltaje *////
  voltaje_v: number | undefined = undefined;
  corriente_v: number | undefined = undefined;
  resistencia_v: number | undefined = undefined;
  calcvoltaje(): void {
    // title = 'Calculadoras de la Ley de Ohm';
    this.voltaje_v = this.resistencia_v! * this.corriente_v!;
    if (this.voltaje_v >= 1000000000) {
      this.voltaje_v = parseFloat((this.voltaje_v / 1000000000).toFixed(2));
      this.sufijo_r = '[GOhm]'
    }
    else if (this.voltaje_v >= 1000000) {
      this.voltaje_v = parseFloat((this.voltaje_v / 1000000).toFixed(2));
      this.sufijo_r = '[MOhm]'
    }
    else if (this.voltaje_v >= 1000) {
      this.voltaje_v = parseFloat((this.voltaje_v / 1000).toFixed(2));
      this.sufijo_r = '[KOhm]'
    }
    else {
      this.voltaje_v = parseFloat((this.voltaje_v).toFixed(2));
      this.sufijo_r = '[Ohm]'
    }
  }

  ////* Calculadora de Corriente *////
  voltaje_c: number | undefined = undefined;
  corriente_c: number | undefined = undefined;
  resistencia_c: number | undefined = undefined;
  calccorriente(): void {
    // title = 'Calculadoras de la Ley de Ohm';
    this.corriente_c = parseFloat((this.voltaje_c! / this.resistencia_c!).toFixed(2));
  }

  voltaje_p1: number | undefined = undefined;
  corriente_p1: number | undefined = undefined;
  potencia_p1: number | undefined = undefined;
  calcpotencia_p1(): void {
    // title = 'Calculadoras de la Ley de Ohm';
    this.potencia_p1 = parseFloat((this.voltaje_p1! * this.corriente_p1!).toFixed(2));
  }

  resistencia_p2: number | undefined = undefined;
  corriente_p2: number | undefined = undefined;
  potencia_p2: number | undefined = undefined;
  calcpotencia_p2(): void {
    // title = 'Calculadoras de la Ley de Ohm';
    this.potencia_p2 = parseFloat((this.corriente_p2! * this.corriente_p2! * this.resistencia_p2!).toFixed(2));
  }

  voltaje_p3: number | undefined = undefined;
  resistencia_p3: number | undefined = undefined;
  potencia_p3: number | undefined = undefined;
  calcpotencia_p3(): void {
    // title = 'Calculadoras de la Ley de Ohm';
    this.potencia_p3 = parseFloat((this.voltaje_p3! * this.voltaje_p3! / this.resistencia_p3!).toFixed(2));
  }

}
