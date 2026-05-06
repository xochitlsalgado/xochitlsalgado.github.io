import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // 1. IMPORTAR ESTO
import { WorkExperienceService, WorkExperience } from '../services/work-experience-service/work-experience';

@Component({
  selector: 'app-work-experience',
  standalone: true,           // 2. AGREGAR ESTA LÍNEA
  imports: [CommonModule],    // 3. AGREGAR ESTA LÍNEA (para que funcione el *ngFor)
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
  workExperienceList: WorkExperience[] = [];

  constructor(private workService: WorkExperienceService) {}

  ngOnInit(): void {
    this.workService.getWorkExperience().subscribe(data => {
      this.workExperienceList = data;
    });
  }
}
