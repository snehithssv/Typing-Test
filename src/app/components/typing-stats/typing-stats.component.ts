import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-typing-stats',
  standalone: true,
  imports: [],
  templateUrl: './typing-stats.component.html',
  styleUrl: './typing-stats.component.scss'
})
export class TypingStatsComponent {
  @Input() wordCount: number = 0;
  @Input() typingSpeed: number = 0; 
  @Input() timeElapsed: number = 0;
}
