import { Component, OnInit } from '@angular/core';
import { CertificatesService } from '../services/certificates.service';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  standalone: false // Pon esto en false para que sea compatible con AppModule
})
export class CertificatesComponent implements OnInit {
  certificates: any[] = []; // Inicializamos como array vacío

  constructor(private certService: CertificatesService) {}

  ngOnInit() {
    this.certService.getCertificates().subscribe((data: any) => {
      this.certificates = data;
    });
  }
}
