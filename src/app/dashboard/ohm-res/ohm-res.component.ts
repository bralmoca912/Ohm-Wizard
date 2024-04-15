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

  voltaje: number = 0;
  corriente: number = 0;
  potencia: number = 0;

  clacpotencia(): void {
    // title = 'Calculadoras de la Ley de Ohm';
    this.potencia = this.voltaje * this.corriente;
  }

}
