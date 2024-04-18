import { CommonModule } from '@angular/common';
import { Component, Input, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [CommonModule],
  template: `
  <h1 class="md:text-4xl sm:text-xl text-center sm:mb-3 md:mb-10 mt-3l">{{title}}</h1>
  `,
  styles: ``
})
export class TitleComponent {
  @Input({ required: true }) title!: string;
  @Input({ transform: booleanAttribute }) withShadow: boolean = false;

}
