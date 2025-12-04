import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, tap } from 'rxjs'
import { environment } from '../../../environments/environment'

interface RegisterRequest {
  username: string
  password: string
  email: string
  avatar?: string
  csrfToken?: string
}

interface LoginRequest {
  username: string
  password: string
  csrfToken?: string
}

interface LoginResponse {
  token: string
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = environment.apiUrl
  private jwt = 'jwt'
  private csrfToken = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => (Math.random() * 16 | 0).toString(16))

  constructor(private http: HttpClient) { }

  register(data: RegisterRequest): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/register`, {
      ...data,
      csrfToken: this.csrfToken
    })
  }

  login(data: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/auth/token`, {
      ...data,
      csrfToken: this.csrfToken
    })
      .pipe(
        tap(res => localStorage.setItem(this.jwt, res.token))
      )
  }

  logout() {
    localStorage.removeItem(this.jwt)
  }

  getToken(): string | null {
    return localStorage.getItem(this.jwt)
  }
}
