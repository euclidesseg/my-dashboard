import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '@services/user.service';
import { TitleComponent } from '@shared/title/title.component';
import { delay, switchMap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl: './user.component.html',
  styles: ``,
})
export default class UserComponent {
  public activateRute = inject(ActivatedRoute)

  constructor(
    private router: Router,
    private userService: UserService
  ) { }


  // public user = signal<User|undefined>(undefined); //! señal comun y corriente

  public user = toSignal( //! toma un observable lo convierte en una señal
    this.activateRute.params
      .pipe(
        delay(1500),
        switchMap(({ id }) => this.userService.getUserById(id))

      )
  )
  public userLabel = computed<string | undefined>(() => this.user()?.data.first_name)

  goBack(): void {
    this.router.navigateByUrl('dashboard/users-list')
  }
}
