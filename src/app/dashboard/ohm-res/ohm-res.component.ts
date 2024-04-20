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
  voltaje_r: any = null;
  corriente_r: any = null;
  resistencia_r: any = null;
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
  corriente_v: any = null;
  resistencia_v: any = null;
  voltaje_v: any = null;
  sufijo_v: string = '[V]';

  calcvoltaje(): void {
    this.voltaje_v = this.resistencia_v * this.corriente_v;
    if (this.voltaje_v < 0) {
      this.voltaje_v = 'No existe';
    }
    if (this.voltaje_v >= 1000000000000) {
      this.voltaje_v = 'Infinity';
    }
    if (this.voltaje_v >= 1000000000) {
      this.voltaje_v = parseFloat((this.voltaje_v / 1000000000).toFixed(2));
      this.sufijo_v = '[GV]'
    }
    else if (this.voltaje_v >= 1000000) {
      this.voltaje_v = parseFloat((this.voltaje_v / 1000000).toFixed(2));
      this.sufijo_v = '[MV]'
    }
    else if (this.voltaje_v >= 1000) {
      this.voltaje_v = parseFloat((this.voltaje_v / 1000).toFixed(2));
      this.sufijo_v = '[KV]'
    }
    else {
      this.voltaje_v = parseFloat((this.voltaje_v).toFixed(2));
      this.sufijo_v = '[V]'
    }
  }


  ////* Calculadora de Corriente *////
  voltaje_c: any = null;
  resistencia_c: any = null;
  corriente_c: any = null;
  sufijo_c: string = '[A]';

  calccorriente(): void {
    this.corriente_c = this.voltaje_c / this.resistencia_c;
    if (this.corriente_c < 0) {
      this.corriente_c = 'No existe';
    }
    if (this.corriente_c >= 1000000000000) {
      this.corriente_c = 'Infinity';
    }
    if (this.corriente_c >= 1000000000) {
      this.corriente_c = parseFloat((this.corriente_c / 1000000000).toFixed(2));
      this.sufijo_c = '[GA]'
    }
    else if (this.corriente_c >= 1000000) {
      this.corriente_c = parseFloat((this.corriente_c / 1000000).toFixed(2));
      this.sufijo_c = '[MA]'
    }
    else if (this.corriente_c >= 1000) {
      this.corriente_c = parseFloat((this.corriente_c / 1000).toFixed(2));
      this.sufijo_c = '[KA]'
    }
    else {
      this.corriente_c = parseFloat((this.corriente_c).toFixed(2));
      this.sufijo_c = '[A]'
    }
  }

  voltaje_p1: any = null;
  corriente_p1: any = null;
  potencia_p1: any = null;
  sufijo_p1: string = '[W]';

  calcpotencia_p1(): void {
    this.potencia_p1 = this.voltaje_p1 * this.corriente_p1;
    if (this.potencia_p1 < 0) {
      this.potencia_p1 = 'No existe';
    }
    if (this.potencia_p1 >= 1000000000000) {
      this.potencia_p1 = 'Infinity';
    }
    if (this.potencia_p1 >= 1000000000) {
      this.potencia_p1 = parseFloat((this.potencia_p1 / 1000000000).toFixed(2));
      this.sufijo_p1 = '[GW]'
    }
    else if (this.potencia_p1 >= 1000000) {
      this.potencia_p1 = parseFloat((this.potencia_p1 / 1000000).toFixed(2));
      this.sufijo_p1 = '[MW]'
    }
    else if (this.potencia_p1 >= 1000) {
      this.potencia_p1 = parseFloat((this.potencia_p1 / 1000).toFixed(2));
      this.sufijo_p1 = '[KW]'
    }
    else {
      this.potencia_p1 = parseFloat((this.potencia_p1).toFixed(2));
      this.sufijo_p1 = '[W]'
    }
  }

  resistencia_p2: any = null;
  corriente_p2: any = null;
  potencia_p2: any = null;
  sufijo_p2: string = '[W]';

  calcpotencia_p2(): void {
    this.potencia_p2 = this.corriente_p2 * this.corriente_p2 * this.resistencia_p2;
    if (this.potencia_p2 < 0) {
      this.potencia_p2 = 'No existe';
    }
    if (this.potencia_p2 >= 1000000000000) {
      this.potencia_p2 = 'Infinity';
    }
    if (this.potencia_p2 >= 1000000000) {
      this.potencia_p2 = parseFloat((this.potencia_p2 / 1000000000).toFixed(2));
      this.sufijo_p2 = '[GW]'
    }
    else if (this.potencia_p2 >= 1000000) {
      this.potencia_p2 = parseFloat((this.potencia_p2 / 1000000).toFixed(2));
      this.sufijo_p2 = '[MW]'
    }
    else if (this.potencia_p2 >= 1000) {
      this.potencia_p2 = parseFloat((this.potencia_p2 / 1000).toFixed(2));
      this.sufijo_p2 = '[KW]'
    }
    else {
      this.potencia_p2 = parseFloat((this.potencia_p2).toFixed(2));
      this.sufijo_p2 = '[W]'
    }
  }

  voltaje_p3: any = null;
  resistencia_p3: any = null;
  potencia_p3: any = null;
  sufijo_p3: string = '[W]';

  calcpotencia_p3(): void {
    this.potencia_p3 = this.voltaje_p3 * this.voltaje_p3 / this.resistencia_p3;
    if (this.potencia_p3 < 0) {
      this.potencia_p3 = 'No existe';
    }
    if (this.potencia_p3 >= 1000000000000) {
      this.potencia_p3 = 'Infinity';
    }
    if (this.potencia_p3 >= 1000000000) {
      this.potencia_p3 = parseFloat((this.potencia_p3 / 1000000000).toFixed(2));
      this.sufijo_p3 = '[GW]'
    }
    else if (this.potencia_p3 >= 1000000) {
      this.potencia_p3 = parseFloat((this.potencia_p3 / 1000000).toFixed(2));
      this.sufijo_p3 = '[MW]'
    }
    else if (this.potencia_p3 >= 1000) {
      this.potencia_p3 = parseFloat((this.potencia_p3 / 1000).toFixed(2));
      this.sufijo_p3 = '[KW]'
    }
    else {
      this.potencia_p3 = parseFloat((this.potencia_p3).toFixed(2));
      this.sufijo_p3 = '[W]'
    }
  }

}
