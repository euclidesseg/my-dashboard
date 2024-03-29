import { CommonModule } from '@angular/common';
import {Component, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

type Grade = 'A' | 'S' | 'E' | 'I' | 'D'
@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl:'./control-flow.component.html',
  styleUrl: './control-flow.component.css',
})
export default class ControlFlowComponent{

  // *CREAMOS UNA SEÑAL
  // #las señales se utilizan para la comunicación de eventos dentro de la aplicación Angular,
  // #public showContent = signal(false).asReadonly;   que sea de solo lectura no podre cambiar el valor de la signals

  public showContent = signal(false);
  public grade = signal<Grade>('D');

  public frameWorks = signal(['Angular', 'vue', 'Svelte', 'SpringBoot', 'React'])
  public frameWorks2 = signal([])

  public toggleContent(){
    console.log("toogle")
    this.showContent.update(value => !value);
  }

  public toggleGrade(grade:Grade){
    this.grade.update(value => grade);
  }
}
