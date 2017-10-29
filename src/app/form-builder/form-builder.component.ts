import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {

  constructor() { }

  employeeAddressForm = new FormGroup({
    textBox: new FormGroup({
        name: new FormControl('', Validators.required),
        type: new FormControl('', Validators.required)
    }),
    select: new FormGroup({
      name: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
      optionsToSelect: new FormControl('', Validators.required)
  })
  });

  submitted = false;
  onSubmit() {
      console.log('hello');
  }
  addNewEmployeeAddress() {
      this.employeeAddressForm.reset();
      this.submitted = false;
  }

  ngOnInit() {
  }

}
