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

  btnactual: number = 0;

  color1(){
    this.btnactual = 1;
  }

}
