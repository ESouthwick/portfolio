import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate, state, style, transition, trigger } from "@angular/animations";

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css'],
  animations: [
    trigger('fadeOut', [
      state('initial', style({
        opacity: 1 ,transform: 'translateY(0)'
      })),
      state('final', style({
        opacity: 1 ,transform: 'translateY(-40px)'
      })),
      transition('initial => final', animate('1500ms ease-in-out')),
      transition('final => initial', animate('1500ms ease-in-out'))
    ])
  ]
})
export class IntroComponent {
  // @ts-ignore
  animationState: string = 'initial';
  currentIndex = 0;
  attributeList = ["Tech Enthusiast","Father", "Husband", "LOTR Fan", "Broncos Fan"];
  attributeText = this.attributeList[this.currentIndex];

  ngOnInit(): void {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.attributeList.length;
      this.attributeText = this.attributeList[this.currentIndex];
      this.animationState = 'final';

      setTimeout(() => {
        this.animationState = 'initial';
      }, 500);
    }, 4000);
    }
}

