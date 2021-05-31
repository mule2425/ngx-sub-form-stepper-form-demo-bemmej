import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepperModule, MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StepperFormComponent } from './stepper-form/stepper-form.component';
import { FirstPartComponent } from './stepper-form/first-part/first-part.component';
import { SecondPartComponent } from './stepper-form/second-part/second-part.component';
import { ThirdPartComponent } from './stepper-form/third-part/third-part.component';

const MATERIAL_MODULES = [
  MatStepperModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
];

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, ReactiveFormsModule, ...MATERIAL_MODULES],
  declarations: [AppComponent, StepperFormComponent, FirstPartComponent, SecondPartComponent, ThirdPartComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
