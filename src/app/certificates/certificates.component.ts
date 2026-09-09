import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CertificatesService, Certificate } from '../services/certificates-service/certificates.service';

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss']
})
export class CertificatesComponent implements OnInit {
  certificates: Certificate[] = [];

  constructor(private certService: CertificatesService) {}

  ngOnInit(): void {
    this.certService.getCertificates().subscribe((data: Certificate[]) => {
      this.certificates = data;
    });
  }

  getCertificateTitle(cert: Partial<Certificate>): string {
    return cert.name ?? cert.title ?? 'Certificado';
  }

  getCertificateUrl(cert: Partial<Certificate>): string | null {
    const issuer = (cert.issuer ?? cert.url ?? '').trim();

    if (!issuer) {
      return null;
    }

    return /^https?:\/\//i.test(issuer) ? issuer : null;
  }
}
