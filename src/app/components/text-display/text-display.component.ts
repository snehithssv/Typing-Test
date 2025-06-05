import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text-display.component.html',
  styleUrl: './text-display.component.scss'
})
export class TextDisplayComponent {
  @Input() text: string = '';
  @Input() currentWordIndex: number = 0;
  @Input() currentCharIndex: number = 0;


  getWordsArray(str:string):string[]{
    return str.split(' '); 
  }

  getCharArray(str:string):string[]{
    return [...str];
  }

  getCurrentWordColor(i:number): string {
    var color:string = '';
    if(this.currentWordIndex==i){
      color = 'yellow';
    }
    return color;
  }

  getCurrentCharStyle(i:number,j:number):string{
    var style:string = '';
    if(this.currentCharIndex==j && this.currentWordIndex==i){
      style = 'underline';
    }
    return style;
  }

}
