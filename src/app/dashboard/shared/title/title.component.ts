import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-title',
  standalone: true,
  imports: [CommonModule],
  template: `
  <h3 class="font-bold text-xl text-blue-800">{{title}}</h3>
  <p class="font-semibold">{{paragraph}}</p>
  
  `,
  styles: ``,
})
export class TitleComponent {
  @Input({required: true}) title!:string; // ahoara puedo indicar que los inputs son o no son requeridos
  @Input() paragraph!:string;
  
}
