import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { AuthService } from '../utils/auth.service'
import { Router, RouterModule } from '@angular/router'
import { Location } from '@angular/common'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [FormsModule, RouterModule]
})
export class LoginComponent {
  username = ''
  password = ''

  constructor(
    private authService: AuthService,
    private _location: Location,
    private router: Router
  ) { }

  login() {
    this.authService.login({ username: this.username, password: this.password })
      .subscribe({
        next: res => this.router.navigate(['/chat']),
        error: err => console.error(err)
      })
  }

  goBack() {
    this._location.back()
  }
}