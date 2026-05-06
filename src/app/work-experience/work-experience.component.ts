import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { WorkExperienceService } from '../services/work-experience-service/work-experience';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
  workExperienceList: any[] = [];

  constructor(private workService: WorkExperienceService) {}

  ngOnInit(): void {
    this.workService.getWorkExperience().subscribe(data => {
      this.workExperienceList = data;
    });
  }

  // ESTA ES LA FUNCIÓN QUE PIDE TU PROFESOR
  // Toma el texto de logros y lo convierte en un ARRAY (lista)
  getLogrosArray(accomplishments: string): string[] {
    if (!accomplishments) return [];
    return accomplishments.split(',').map(item => item.trim());
  }
}
