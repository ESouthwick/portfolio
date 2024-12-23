import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router'
import { ViewportScroller } from '@angular/common';
import { IntroComponent } from "../intro/intro.component";
import { AboutMeComponent } from "../about-me/about-me.component";
import { SkillsComponent } from "../skills/skills.component";
import { ContactComponent } from "../contact/contact.component";
import { ResumeComponent } from "../resume/resume.component";


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule,
            IntroComponent, AboutMeComponent, SkillsComponent, ContactComponent, ResumeComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{
  isResumeActive: boolean = false;
  emailIcon = '/assets/icons/envelope-64.png';
  shareIcon= '/assets/icons/share-50.png';

  constructor(private scroller: ViewportScroller, private router: Router) {
  }

  goTo(target: string): void {
    if (target === 'targetResume') {
      this.isResumeActive = true;
      return;
    }

    this.router.navigate(['/']);
    this.isResumeActive = false;
    setTimeout(() => {
      document.getElementById(target)?.scrollIntoView({
        behavior: 'smooth',
      });
    }, 100);
  }
}
