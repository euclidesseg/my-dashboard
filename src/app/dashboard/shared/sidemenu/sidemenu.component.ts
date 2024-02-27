import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { routes } from '../../../app.routes';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.css',
})
export class SidemenuComponent {
  public menuItems = routes
  .map(route => route.children ?? [] ) // me obtiene un arreglo dentro de otro arreglo
  .flat()// me obtiene el arreglo dentro del arreglo
  .filter(route => route.path && route.path)
  .filter(route => !route.path?.includes(':'))
  constructor(){
    console.log(this.menuItems);
  }
}
