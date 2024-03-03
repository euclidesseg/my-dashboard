import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template:`

    <app-title [title]="title" [paragraph]="paragrapth"></app-title>

    <section class="flex justify-start">
      <img srcset="https://picsum.photos/id/237/200/300" alt="picsum" width="200" height="auto"
      style="view-transition-name: hero1"
      >
      <div class="bg-blue-500 w-56 h-56"
      style="view-transition-name: hero2"
      >
        
      </div>
    </section>

`,
  styleUrl: './view-transition.component.css',
})
export default class ViewTransitionComponent {
  title:string = 'View Transition 1'
  paragrapth:string = 'En Angular, los view transitions transiciones de vista son animaciones'+
    'o efectos visuales que se aplican cuando se cambia de una vista entre rutas.'+
    'Estas transiciones son utilizadas para mejorar la experiencia del usuario al proporcionar una sensación'+
    'fluida y atractiva al navegar entre diferentes componentes o páginas dentro de la aplicación'
}

// #Para agregar estas animaciones bamos hasta nuestro app.config a inyectar un provider

//# El hero animation no es mas que si en la pagina 1 hay una imagen y en la 2 tambien pero en diferentes posiciónes 
//# Le podemos decir al navegador que determine la posición que estava antes de la otra y realice una animacion desde la 
//# posicion A hasta la posición B incluso animar las propiedades de animacion
