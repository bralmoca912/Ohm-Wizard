import { CommonModule } from '@angular/common';
import { Component, Input, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [CommonModule],
  template: `
  <h1 class="text-4xl text-center mb-10 mt-3">{{title}}</h1>
  `,
  styles: ``
})
export class TitleComponent {
  @Input({ required: true }) title!: string;
  @Input({ transform: booleanAttribute }) withShadow: boolean = false;

}
