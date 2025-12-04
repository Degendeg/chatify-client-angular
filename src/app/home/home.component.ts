import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  styleUrl: './home.component.css',
  imports: [RouterModule],
  template: `
    <div class="home">
      <h1>'suh dude? 👋</h1>
      <button routerLink="/login">Login</button>
      <button routerLink="/register">Register</button>
    </div>
  `,
  // styles: [``]
})
export class HomeComponent { }