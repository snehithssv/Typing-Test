import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appTrackCapsDirective]',
  standalone: true
})
export class TrackCapsDirectiveDirective {
    @Output('appTrackCapsDirective') capsLock = new EventEmitter<Boolean>();
  
    @HostListener('window:keydown', ['$event'])
    onKeyDown(event: KeyboardEvent): void {
      this.capsLock.emit(event.getModifierState && event.getModifierState('CapsLock'));
    }
    @HostListener('window:keyup', ['$event'])
    onKeyUp(event: KeyboardEvent): void {
      this.capsLock.emit(event.getModifierState && event.getModifierState('CapsLock'));
    }
  }
