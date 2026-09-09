import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Certificate {
  id?: string;
  title?: string;
  name?: string;
  institution?: string;
  issuer?: string;
  url?: string;
  year?: string;
}

@Injectable({
  providedIn: 'root'
})
export class CertificatesService {
  constructor(private firestore: Firestore) {}

  getCertificates(): Observable<Certificate[]> {
    const certRef = collection(this.firestore, 'certificates');
    return collectionData(certRef, { idField: 'id' }) as Observable<Certificate[]>;
  }
}
