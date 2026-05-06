import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { LanguagesService, Language } from '../services/languages-service/languages';

@Component({
  selector: 'app-languages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {
  languagesList: Language[] = [];

  constructor(private languagesService: LanguagesService) {}

  ngOnInit(): void {
    this.languagesService.getLanguages().subscribe((data: any[]) => {
      // MAPEAMOS los datos para que el HTML siempre reciba minúsculas
      this.languagesList = data.map(item => {
        return {
          id: item.id,
          name: item.name || item.Name || '',
          level: item.level || item.Level || ''
        } as Language;
      });
    });
  }
}
