import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeavyLoadersSlowComponent } from '@shared/heavy-loaders/heavy-loaders-slow.component';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule, HeavyLoadersSlowComponent, TitleComponent],
  templateUrl: './defer-view.component.html',
  styles: ``,
})
export default class DeferViewComponent {}

//# Los defer views Permite definir que el bloque de código será cargado
//# de forma perezosa y no renderizado de forma inicial,
//# permitiéndonos especificar el momento en el cual
//# cargarlo.

//# Ahora estos deger suelen ser usados cuando el componente es bloqueante qeue esta super cargado
//#
