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
  numCols = 6;
}
