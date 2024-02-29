import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template:`
    <section class="mb-10 overflow-x-auto container bg-white rounded shadow p-10 ">
      <app-title
        [title]="currentFramework()"
        [paragraph]="'
        La detección de cambios en Angular se refiere al proceso automático de rastreo y actualización de los datos en la interfaz de usuario cuando se producen cambios en el modelo de datos de la aplicación. Angular utiliza un mecanismo de detección de cambios llamado Change Detection para identificar cuándo y cómo actualizar la vista en función de las modificaciones en los datos subyacentes.'"
      ></app-title>
    </section>

    <pre class="text-black">{{frameWorkAsSignals() | json}}</pre>
    <pre class="text-black">{{frameWorkAsProperty | json}}</pre>
  `,
  styles: ``,
})
export default class ChangeDetectionComponent {

  public currentFramework = computed(() =>{
    return `Cahange Detection- ${this.frameWorkAsSignals().name}`
  })

  public frameWorkAsSignals = signal({
    name:'Angular',
    releaseDate: 2016,
  })

  public frameWorkAsProperty = {
    name:'Angular',
    releaseDate: 2016,
  }

  constructor()
  {
    setTimeout(() => {
      this.frameWorkAsSignals.update(value => ({
        ...value,
        name:'react',
      }))
      // this.frameWorkAsProperty = {
      //   name:'react',
      //   releaseDate: 2016,
      // }
      console.log("hecho")
    }, 3000);
  }
}

//# Cuando una propiedad se modifica angular tiene una libreria que se llama son zonJs el cual detecta cambios en alguna
//# parte de nuestra aplicacion esos cambios son aplicados al tener la propiedad por defecto
//# En este enfoque, Angular realiza la detección de cambios en todos los componentes en cada 
//# ciclo de detección de cambios, independientemente de si han cambiado o no sus entradas.
//? changeDetection: ChangeDetectionStrategy.Default
//# Ahoara cuando la cambiamos a
//? changeDetection: ChangeDetectionStrategy.OnPush
//! Ahora con este enfoque los cambios no se hacen automaticamente
//# Este enfoque mejora el rendimiento de Angular al reducir la cantidad de 
//# detecciones de cambios que se realizan, ya que solo se activan cuando las entradas del componente cambian o se notifica un cambio manualmente.

//* El beneficio es que angular esta menos pendiente de los cambios que se generan y mejora el performance
//*
