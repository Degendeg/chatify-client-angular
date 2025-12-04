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
  styles: [`
    .home { text-align: center; margin-top: 3rem; }
    button { margin: 0.5rem; padding: 0.5rem 1rem; font-size: 1rem; }
  `]
})
export class HomeComponent { }