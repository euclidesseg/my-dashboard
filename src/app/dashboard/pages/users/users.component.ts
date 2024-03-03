import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '@services/user.service';

@Component({
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './users.component.html',
  styles: ``,
})
export default class UsersComponent {
  // public userService = inject(this.userService)
  constructor(public userService: UserService){
   
  }  
}
