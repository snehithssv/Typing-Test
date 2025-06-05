import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-typing-result',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './typing-result.component.html',
  styleUrl: './typing-result.component.scss'
})
export class TypingResultComponent {
  @Input() result:string = "";
  @Input()  errors:string[] = [];
}
