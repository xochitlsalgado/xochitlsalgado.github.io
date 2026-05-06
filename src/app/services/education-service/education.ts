import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

// Agregamos esto para que Angular sepa qué campos existen
export interface Education {
  id?: string;
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
}

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor(private firestore: Firestore) {}

  // Cambiamos any por Education
  getEducation(): Observable<Education[]> {
    const ref = collection(this.firestore, 'education');
    return collectionData(ref, { idField: 'id' }) as Observable<Education[]>;
  }
}
