import { Component } from '@angular/core';
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  imports: [MatInputModule, MatButtonModule, MatIconModule],
  standalone: true
})
export class ContactComponent {
  githubIcon= '/assets/icons/github-48.png';
  discordIcon = '/assets/icons/discord-50.png';
  linkedinIcon = '/assets/icons/linkedin-logo-50.png';
  xIcon = '/assets/icons/x-50.png';
  resume = '/assets/icons/resume-50.png';
  emailIcon = '/assets/icons/envelope-64.png';
}
