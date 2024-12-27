import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from "@angular/material/icon";
import {MatGridListModule} from "@angular/material/grid-list";
export interface Tile {
  icon: string;
  text: string;
  cols: number;
  rows: number;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatGridListModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  tiles: Tile[] = [
    { icon: '../../assets/icons/angular-icon-size_128.png', text: 'Angular', cols: 1, rows: 1 },
    { icon: '../../assets/icons/html-icon-size_128.png', text: 'HTML5', cols: 1, rows: 1 },
    { icon: '../../assets/icons/lang-css-icon-size_128.png', text: 'CSS3', cols: 1, rows: 1 },
    { icon: '../../assets/icons/typescript-icon-size_128.png', text: 'TypeScript/Javascript', cols: 1, rows: 1 },
    { icon: '../../assets/icons/intellijidea.256x256.png', text: 'IntelliJ', cols: 1, rows: 1 },
    { icon: '../../assets/icons/vscode-icon-size_128.png', text: 'VS Code', cols: 1, rows: 1 },
    { icon: '../../assets/icons/github-icon-size_128.png', text: 'Github', cols: 1, rows: 1 },
    { icon: '../../assets/icons/git-icon-size_128.png', text: 'Git', cols: 1, rows: 1 },
    { icon: '../../assets/icons/api-icon-size_128.png', text: "RESTful API's", cols: 1, rows: 1 },
    { icon: '../../assets/icons/python-icon-size_128.png', text: 'Python', cols: 1, rows: 1 },
    { icon: '../../assets/icons/java-icon-size_128.png', text: 'Java', cols: 1, rows: 1 },
    { icon: '../../assets/icons/postgresql-icon-size_128.png', text: 'Postgresql', cols: 1, rows: 1 },
  ];
  numCols = 6;
}
