import { Component } from '@angular/core';
import { StepperForm } from './stepper-form.interface';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  public stepperFormUpdated(stepperForm: StepperForm): void {
    console.log(stepperForm);
  }
}
