import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "./navbar/navbar.component";
import {IntroComponent} from "./intro/intro.component";
import {AboutMeComponent} from "./about-me/about-me.component";
import {SkillsComponent} from "./skills/skills.component";
import {ContactComponent} from "./contact/contact.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NavbarComponent, IntroComponent,
    AboutMeComponent, SkillsComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Resumesite';
}
