import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextDisplayComponent } from '../../components/text-display/text-display.component';
import { TypingResultComponent } from '../../components/typing-result/typing-result.component';
import { TypingStatsComponent } from '../../components/typing-stats/typing-stats.component';
import { TypingFieldComponent } from "../../components/typing-field/typing-field.component";
import { TitleComponent } from '../../components/title/title.component';


@Component({
  selector: 'app-test-page',
  standalone: true,
  imports: [CommonModule, TextDisplayComponent, TypingStatsComponent, TypingResultComponent,
     TypingFieldComponent, TitleComponent],
  templateUrl: './test-page.component.html',
  styleUrl: './test-page.component.scss'
})
export class TestPageComponent {
    currentWordIndex:number = 0;
    isCapsLockOn:Boolean = false;
    currentCharIndex:number = 0;
    text:string = "The Patronus is the most famous defensive charm. The aim is to produce a protector, which takes the form of an animal. The exact form of the Patronus will not be apparent until the spell has been successfully cast. It is the only spell effective against Dementors. The majority of witches and wizards are unable to produce Patronuses and to do so is generally considered a mark of superior magical ability.";
    // text:string = "why are we doing this now.,asdf";
    typedData:string = "";

    startTime: number | null = null; 
    wordCount: number = 0;
    typingSpeed: number = 0; 
    timeElapsed: number = 0;
    result:string = "";
    errors:string[] = [];

    typing(event: Event) {
      if(event instanceof InputEvent){ 
          if(!this.startTime){
            this.startTime = Date.now();
          }
          this.updateTypingSpeed();
          if(event.data == ' '  && event.inputType == 'insertText'){
            const inputElement = event.target as HTMLInputElement;
            this.typedData += inputElement.value;
            inputElement.value = '';
            this.currentWordIndex++;
            this.currentCharIndex = 0;
            if(this.currentWordIndex==(this.getWordsArray(this.text).length))
              {      
                inputElement.disabled = true;
                const val =  this.validateAccuracy(this.text,this.typedData);
                this.errors = val.errors;
                this.result = `${val.similarityPercentage}`;
              }
          }
          else{
            this.currentCharIndex += (event.inputType !== 'deleteContentBackward')?1:-1;
          }
      }
      if(event instanceof KeyboardEvent && event.key === 'Enter'){        
        const inputElement = event.target as HTMLInputElement;
        this.typedData += inputElement.value;
        inputElement.disabled = true;
        const charArray = this.getWordsArray(this.text);

        let compeltedString:string;
        if(this.currentWordIndex>0){
          compeltedString =  (charArray.slice(0,this.currentWordIndex)).join(" "); 
          compeltedString += " " + ([...charArray[this.currentWordIndex]].slice(0,this.currentCharIndex)).join("");
        }else{
          compeltedString = ([...charArray[this.currentWordIndex]].slice(0,this.currentCharIndex)).join("");
        }
        const val =  this.validateAccuracy(compeltedString,this.typedData);
        this.errors = val.errors;
        this.result = `${val.similarityPercentage}`;
      }
    } 

    updateTypingSpeed() {
      const currentTime = Date.now();
      this.timeElapsed = (currentTime - <number>this.startTime) / 1000; 
  
      const text = this.typedData.trim();
      this.wordCount = text ? text.split(/\s+/).length : 0;
  
      if (this.timeElapsed > 0) {
        const minutes = this.timeElapsed / 60;
        this.typingSpeed = Math.floor(this.wordCount / minutes);
      }
    }

    getWordsArray(str:string):string[]{
      return str.split(' '); 
    }


    validateAccuracy(text: string, typedData: string): { errors: string[], similarityPercentage: number } {
      let errors: string[] = [];
      let matchCount: number = 0;
      
      let w1:string[] = this.getWordsArray(text);
      let w2:string[] = this.getWordsArray(typedData);
      let length: number =0; 
      for (let i=0;i<w1.length;i++){
        if((w1[i]===w2[i])){
          matchCount+=w1[i].length;
          length+=w1[i].length;
        }else{
          for (let j=0;j<w1[i].length;j++){       
            if ( w1[i][j] === ( w2[i][j] || '')) {
              matchCount++;            
              } else {
                errors.push(`Mistake in '${w1[i]}' at '${w1[i][j]}' with error '${w2[i][j]||""}'`);
              }
              length++;
          }
        }
      }
      let similarityPercentage = (matchCount / length) * 100;    
      return {
        errors: errors,
        similarityPercentage: similarityPercentage
      };
    }
}
