import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css'],
  providers:  [QuestionService]
})
export class FormBuilderComponent implements OnInit {
  questionService: any;

  constructor(service: QuestionService) {
    this.questionService = service;
  }

  employeeAddressForm = new FormGroup({
    textBox: new FormGroup({
        name: new FormControl('', Validators.required),
        type: new FormControl('', Validators.required)
    }),
    select: new FormGroup({
      name: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
    })
  });

  submitted = false;

  onSubmit() {
    console.log(this.employeeAddressForm.value);
    this.questionService.saveQuestions(this.employeeAddressForm.value);
  }

  addNewEmployeeAddress() {
      this.employeeAddressForm.reset();
      this.submitted = false;
  }

  ngOnInit() {
  }

}
