import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestPageComponent } from './pages/test-page/test-page.component';
import { IntroPageComponent } from './pages/intro-page/intro-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestPageComponent,IntroPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'typing-test';
}
