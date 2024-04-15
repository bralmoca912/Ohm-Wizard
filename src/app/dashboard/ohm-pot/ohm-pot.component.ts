import { Component } from '@angular/core';
import { TitleComponent } from '../../shared/title/title.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ohm-pot',
  standalone: true,
  imports: [TitleComponent, FormsModule],
  templateUrl: './ohm-pot.component.html',
  styles: ``
})
export default class OhmPotComponent {

  voltaje: number = 0;
  corriente: number = 0;
  potencia: number = 0;

  clacpotencia(): void {
    // title = 'Calculadoras de la Ley de Ohm';
    this.potencia = this.voltaje * this.corriente;
  }
}
