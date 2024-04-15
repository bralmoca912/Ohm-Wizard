import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-ohm-res',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ohm-res.component.html',
  styles: ``
})
export default class OhmResComponent {

  voltaje: number = 0;
  corriente: number = 0;
  potencia: number = 0;

  clacpotencia(): void {
    this.potencia = this.voltaje * this.corriente;
  }

}
