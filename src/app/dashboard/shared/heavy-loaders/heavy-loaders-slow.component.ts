import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-slow',
  standalone: true,
  imports: [CommonModule],
  template: `<h1>Hola mundo</h1>`,
  styles: ``,
})
export class HeavyLoadersSlowComponent {}
