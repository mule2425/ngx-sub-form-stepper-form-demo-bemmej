import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgxRootFormComponent, DataInput, Controls, FormGroupOptions } from 'ngx-sub-form';
import { StepperForm } from '../stepper-form.interface';

@Component({
  selector: 'app-stepper-form',
  templateUrl: './stepper-form.component.html',
  styleUrls: ['./stepper-form.component.css']
})
export class StepperFormComponent extends NgxRootFormComponent<StepperForm> {
  @DataInput()
  @Input('stepperForm')
  public dataInput: StepperForm | null | undefined;

  @Output('stepperFormUpdated')
  public dataOutput: EventEmitter<StepperForm> = new EventEmitter();

  public send() {
    this.manualSave();
  }

  protected getFormControls(): Controls<StepperForm> {
    return {
      part1: new FormControl(),
      part2: new FormControl(),
      part3: new FormControl(),
    }
  }

  public getFormGroupControlOptions(): FormGroupOptions<StepperForm> {
    return {
      validators: [
        formGroup => {
          if (!formGroup || !formGroup.value || !formGroup.value.part1 || !formGroup.value.part2 || !formGroup.value.part3) {
            return null;
          }

          const values: string[] = [
            formGroup.value.part1.firstUnique,
            formGroup.value.part2.secondUnique,
            formGroup.value.part3.thirdUnique,
          ].reduce((acc, curr) => !!curr ? [...acc, curr] : acc, []);

          const valuesSet: Set<string> = new Set(values);

          if (values.length !== valuesSet.size) {
            return {
              sameValues: true
            };
          }

          return null;
        },
      ],
    };
  }
}