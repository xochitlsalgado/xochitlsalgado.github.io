import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterestsService } from '../services/interests-service/interests';

@Component({
  selector: 'app-interests',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './interests.component.html'
})
export class InterestsComponent implements OnInit {
  interests: any[] = [];

  constructor(private interestsService: InterestsService) {}

  ngOnInit(): void {
    this.interestsService.getInterests().subscribe((data: any[]) => {
      this.interests = data;
    });
  }

  // Comprueba si el texto contiene una URL
  esUrl(texto: string): boolean {
    return texto ? texto.includes('http://') || texto.includes('https://') : false;
  }

  // Extrae únicamente la URL del texto
  obtenerUrl(texto: string): string {
    if (!texto) return '#';
    const match = texto.match(/(https?:\/\/[^\s]+)/g);
    return match ? match[0] : '#';
  }

  // Muestra el nombre limpio (ej. "certificado python") sin la URL completa
  obtenerTextoSinUrl(texto: string): string {
    if (!texto) return '';
    return texto.replace(/(https?:\/\/[^\s]+)/g, '').trim();
  }
}
