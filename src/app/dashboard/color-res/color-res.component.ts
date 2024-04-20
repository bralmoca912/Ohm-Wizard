import { Component } from '@angular/core';
import { TitleComponent } from '../../shared/title/title.component';

@Component({
  selector: 'app-color-res',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './color-res.component.html',
  styles: ``
})
export default class ColorResComponent {

  opColor1: number = 10; // Variable inicial
  opColor2: number = 10; // Variable inicial
  opColor3: number = 10; // Variable inicial
  valresistencia: number = 0;

  color1(opcion: number): void {
    switch (opcion) {
    case 0: this.opColor1 = 0; break;
    case 1: this.opColor1 = 1; break;
    case 2: this.opColor1 = 2; break;
    case 3: this.opColor1 = 3; break;
    case 4: this.opColor1 = 4; break;
    case 5: this.opColor1 = 5; break;
    case 6: this.opColor1 = 6; break;
    case 7: this.opColor1 = 7; break;
    case 8: this.opColor1 = 8; break;
    case 9: this.opColor1 = 9; break;
    }
  }
  color2(opcion: number): void {
    switch (opcion) {
    case 0: this.opColor2 = 0; break;
    case 1: this.opColor2 = 1; break;
    case 2: this.opColor2 = 2; break;
    case 3: this.opColor2 = 3; break;
    case 4: this.opColor2 = 4; break;
    case 5: this.opColor2 = 5; break;
    case 6: this.opColor2 = 6; break;
    case 7: this.opColor2 = 7; break;
    case 8: this.opColor2 = 8; break;
    case 9: this.opColor2 = 9; break;
    }
  }
  color3(opcion: number): void {
    switch (opcion) {
    case 0: this.opColor3 = 0; break;
    case 1: this.opColor3 = 1; break;
    case 2: this.opColor3 = 2; break;
    case 3: this.opColor3 = 3; break;
    case 4: this.opColor3 = 4; break;
    case 5: this.opColor3 = 5; break;
    case 6: this.opColor3 = 6; break;
    case 7: this.opColor3 = 7; break;
    case 8: this.opColor3 = 8; break;
    case 9: this.opColor3 = 9; break;
    }
  }

  calcresistencia(): void {
    this.valresistencia = (this.opColor1 * 10 + this.opColor2) * 10 ** this.opColor3;
  }

}
