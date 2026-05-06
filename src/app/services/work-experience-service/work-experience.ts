import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

// Esta es la "receta" completa
export interface WorkExperience {
  id?: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  accomplishments: string;
}

@Injectable({
  providedIn: 'root'
})
export class WorkExperienceService {

  constructor(private firestore: Firestore) {}

  getWorkExperience(): Observable<WorkExperience[]> {
    const ref = collection(this.firestore, 'work-experience');
    return collectionData(ref, { idField: 'id' }) as Observable<WorkExperience[]>;
  }
}
