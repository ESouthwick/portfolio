import {Component, HostListener} from '@angular/core';
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
  numCols = 12;
  screenWidth: number = window.innerWidth; // Initial screen width

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.screenWidth = event.target.innerWidth; // Update on resize
    if (this.screenWidth < 600) {
      this.numCols = 3; // Small screens
    } else if (this.screenWidth < 1260) {
      this.numCols = 6; // Medium screens
    } else {
      this.numCols = 12; // Large screens
    }
  }



}
