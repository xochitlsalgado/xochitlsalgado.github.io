import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

// Definimos qué campos tiene un idioma para que el HTML los reconozca
export interface Language {
  id?: string;
  name: string;
  level: string;
}

@Injectable({
  providedIn: 'root'
})
export class LanguagesService {

  constructor(private firestore: Firestore) {}

  getLanguages(): Observable<Language[]> {
    const ref = collection(this.firestore, 'languages');
    // Forzamos a que los datos sigan la estructura de 'Language'
    return collectionData(ref, { idField: 'id' }) as Observable<Language[]>;
  }
}
