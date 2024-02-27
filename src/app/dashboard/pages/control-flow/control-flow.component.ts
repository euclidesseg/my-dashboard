import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl:'./control-flow.component.html',
  styleUrl: './control-flow.component.css',
})
export default class ControlFlowComponent implements OnInit {
  ngOnInit(): void {
   console.log("ejecutando")
  }
}
