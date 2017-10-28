import { Component } from '@angular/core';
import { QuestionService } from './question.service';

@Component({
  selector: 'app-root',
  template: `
    <div class="main-container">
      <div class="content-container">
        <dynamic-form [questions]="questions"></dynamic-form>
      </div>
    </div>
  `,
  providers:  [QuestionService],
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  questions: any[];

  constructor(service: QuestionService) {
    this.questions = service.getQuestions();
  }
}
