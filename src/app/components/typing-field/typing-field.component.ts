import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { TrackCapsDirectiveDirective } from '../../directives/track-caps-lock/track-caps-directive.directive';

@Component({
  selector: 'app-typing-field',
  standalone: true,
  imports: [CommonModule, TrackCapsDirectiveDirective],
  templateUrl: './typing-field.component.html',
  styleUrl: './typing-field.component.scss'
})
export class TypingFieldComponent {
  @Output() typingEvent = new EventEmitter<Event>();
  isCapsLockOn:Boolean = false;
  isTypingStarted:Boolean =false;
}
