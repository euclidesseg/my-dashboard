import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { SidemenuComponent } from '@shared/sidemenu/sidemenu.component';

@Component({
  standalone: true,
  imports: [RouterModule, SidemenuComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export default class DashboardComponent {}
