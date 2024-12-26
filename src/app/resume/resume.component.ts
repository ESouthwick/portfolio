import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  showResume = false;
  resumeIcon = '/assets/icons/resume-50.png';
  closeIcon = '/assets/icons/close-50.png';

  showMe(){
    this.showResume = !this.showResume;
  }
}
