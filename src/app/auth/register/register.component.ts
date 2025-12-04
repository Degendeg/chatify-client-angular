import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { AuthService } from '../core/auth.service'
import { Location } from '@angular/common'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  imports: [FormsModule]
})
export class RegisterComponent {
  username = ''
  password = ''
  email = ''

  constructor(private authService: AuthService, private _location: Location) { }

  register() {
    this.authService.register({ username: this.username, password: this.password, email: this.email })
      .subscribe({
        next: res => console.log('Registered!', res),
        error: err => console.error(err)
      })
  }

  goBack() {
    this._location.back()
  }
}