import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ChatService, Message } from './utils/chat.service'
import { Router } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { AutoFocusDirective } from '../directives/autofocus.directive'

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule, AutoFocusDirective],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent implements OnInit {
  messages: Message[] = []
  newMessage: string = ''
  loading = true

  constructor(private chatService: ChatService, private router: Router) { }

  ngOnInit() {
    this.chatService.getMessages().subscribe({
      next: msgs => {
        this.messages = msgs
        this.loading = false
      },
      error: err => {
        console.error('Failed to fetch messages', err)
        this.loading = false
      }
    })
  }

  sendMessage() {
    if (!this.newMessage.trim()) return

    this.chatService.sendMessage({
      text: this.newMessage,
      conversationId: null
    }).subscribe({
      next: res => {
        this.messages.push(res.latestMessage)
        this.newMessage = ''
      },
      error: err => console.error('Failed to send message', err)
    })
  }

  logOut() {
    localStorage.removeItem('jwt')
    this.router.navigate(['/'])
  }
}