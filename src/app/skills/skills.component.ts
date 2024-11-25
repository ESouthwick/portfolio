import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from "@angular/material/icon";


@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  angularIcon = '/assets/icons/angular-icon-size_128.png';
  htmlIcon = '/assets/icons/html-icon-size_128.png';
  cssIcon = '/assets/icons/lang-css-icon-size_128.png';
  restfulIcon= '/assets/icons/api-icon-size_128.png';
  githubIcon= '/assets/icons/github-icon-size_128.png';
  gitlabIcon= '/assets/icons/gitlab-icon-size_128.png';
  gitIcon= '/assets/icons/git-icon-size_128.png';
  commandlineIcon= '/assets/icons/command-line-icon-size_128.png';
  vsCodeIcon= '/assets/icons/vscode-icon-size_128.png';
  intelliJIcon= '/assets/icons/intellijidea.256x256.png';
  typescriptIcon= '/assets/icons/typescript-icon-size_128.png';
  pythonIcon = '/assets/icons/python-icon-size_128.png';
  javaIcon = '/assets/icons/java-icon-size_128.png';
  nodeIcon = '/assets/icons/npm-icon-size_128.png';
  postgresIcon = '/assets/icons/postgresql-icon-size_128.png';
}
