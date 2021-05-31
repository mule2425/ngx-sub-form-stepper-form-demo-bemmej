import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgxSubFormComponent, DataInput, Controls, subformComponentProviders } from 'ngx-sub-form';
import { Part2 } from '../../stepper-form.interface';

@Component({
  selector: 'app-second-part',
  templateUrl: './second-part.component.html',
  styleUrls: ['./second-part.component.css'],
  providers: subformComponentProviders(SecondPartComponent)
})
export class SecondPartComponent extends NgxSubFormComponent<Part2> {
  protected getFormControls(): Controls<Part2> {
    return {
      secondCtrl: new FormControl(),
      secondUnique: new FormControl('1'),
    }
  }
}