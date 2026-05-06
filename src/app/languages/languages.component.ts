import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necesario para el *ngFor
import { LanguagesService, Language } from '../services/languages-service/languages';

@Component({
  selector: 'app-languages',
  standalone: true,    // Lo hacemos standalone como los otros
  imports: [CommonModule],
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {
  // Aquí definimos el nombre exacto que busca el HTML
  languagesList: Language[] = []; 

  constructor(private languagesService: LanguagesService) {}

  ngOnInit(): void {
    this.languagesService.getLanguages().subscribe(data => {
      this.languagesList = data;
    });
  }
}
