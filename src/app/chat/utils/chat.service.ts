import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment } from '../../../environments/environment'

export interface Message {
  id: string
  text: string
  createdAt: string
  userId: string
  conversationId: string
}

export interface NewMessage {
  text: string,
  conversationId: any
}

export interface CreateMessageResponse {
  latestMessage: Message;
}

@Injectable({ providedIn: 'root' })
export class ChatService {
  private apiUrl = environment.apiUrl

  constructor(private http: HttpClient) { }

  getMessages(conversationId?: string): Observable<Message[]> {
    const url = conversationId
      ? `${this.apiUrl}/messages?conversationId=${conversationId}`
      : `${this.apiUrl}/messages`

    return this.http.get<Message[]>(url)
  }

  sendMessage(newMessage: NewMessage): Observable<CreateMessageResponse> {
    return this.http.post<CreateMessageResponse>(`${this.apiUrl}/messages`, newMessage)
  }
}