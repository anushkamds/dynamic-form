import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from './dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question.component';

import { ClarityModule } from "clarity-angular";
import { AppComponent } from './app.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { FormElementComponent } from './form-element/form-element.component';

@NgModule({
  declarations: [
    AppComponent, DynamicFormComponent, DynamicFormQuestionComponent, FormBuilderComponent, FormElementComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    ClarityModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
