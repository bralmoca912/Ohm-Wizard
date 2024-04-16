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

  voltaje_r: number = 0;
  corriente_r: number = 0;
  resistencia_r: number = 0;
  calcresistencia(): void {
    // title = 'Calculadoras de la Ley de Ohm';
    this.resistencia_r = parseFloat((this.voltaje_r / this.corriente_r).toFixed(2));
  }

  voltaje_v: number = 0;
  corriente_v: number = 0;
  resistencia_v: number = 0;
  calcvoltaje(): void {
    // title = 'Calculadoras de la Ley de Ohm';
    this.voltaje_v = parseFloat((this.resistencia_v * this.corriente_v).toFixed(2));
  }

  voltaje_c: number = 0;
  corriente_c: number = 0;
  resistencia_c: number = 0;
  calccorriente(): void {
    // title = 'Calculadoras de la Ley de Ohm';
    this.corriente_c = parseFloat((this.voltaje_c / this.resistencia_c).toFixed(2));
  }

}
