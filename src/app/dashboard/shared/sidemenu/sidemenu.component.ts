import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from '../../../app.routes';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.css',
})
export class SidemenuComponent {
  public menuItems = routes
  .map(route => route.children ?? [] ) // me obtiene un arreglo de rutas hijas o un arreglo indefinido
  .flat()// debido a que .map me trae uncluso la ruta que no tiene children .map me saca el arreglo que no tiene contenido y me deja el que tiene las rutas
  .filter(route => route && route.path) // filtrar que si tenga una ruta y que la ruta tenga su direccion
  .filter(route => !route.path?.includes(':')) // dejamos fuera a la ruta que necesita un id
  constructor(){
    console.log(this.menuItems);
  }
}
