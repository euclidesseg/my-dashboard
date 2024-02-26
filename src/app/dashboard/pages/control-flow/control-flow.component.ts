import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  template: './control-flow.html',
  styleUrl: './control-flow.component.css',
})
export class ControlFlowComponent { }
