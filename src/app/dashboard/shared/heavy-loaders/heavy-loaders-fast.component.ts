import { CommonModule } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-fast',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section [ngClass]="['w-full h-200px]', cssClass]">
      <ng-content></ng-content>
    </section>
    `,
  styles: ``,
  //! ng-content Espicifica que puedo mandar contenido html dentro de el selector de el componente
})
export class HeavyLoadersFastComponent {
  @Input({required:true}) cssClass!:string;
  constructor(){
    console.log("Heavy loader fast creado")
  }
}
