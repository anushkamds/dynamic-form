import { Component } from '@angular/core';
import { QuestionService } from './question.service';

@Component({
  selector: 'app-root',
  template: `
    <div class="main-container">
      <div class="content-container">
        <div class="content-area">
          <app-form-builder></app-form-builder>
        </div>
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
