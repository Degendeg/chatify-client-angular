import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ChatService, Message } from './utils/chat.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent implements OnInit {
  messages: Message[] = []
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

  logOut() {
    localStorage.removeItem('jwt')
    this.router.navigate(['/'])
  }
}