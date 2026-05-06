import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // 1. IMPORTAR ESTO
import { EducationService, Education } from '../services/education-service/education';

@Component({
  selector: 'app-education',
  standalone: true,           // 2. AGREGAR ESTA LÍNEA
  imports: [CommonModule],    // 3. AGREGAR ESTA LÍNEA (para que funcione el *ngFor)
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educationList: Education[] = [];

  constructor(private educationService: EducationService) {}

  ngOnInit(): void {
    this.educationService.getEducation().subscribe(data => {
      this.educationList = data;
    });
  }
}
