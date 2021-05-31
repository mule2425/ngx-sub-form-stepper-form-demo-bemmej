import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgxSubFormComponent, DataInput, Controls, subformComponentProviders } from 'ngx-sub-form';
import { Part1 } from '../../stepper-form.interface';

@Component({
  selector: 'app-first-part',
  templateUrl: './first-part.component.html',
  styleUrls: ['./first-part.component.css'],
  providers: subformComponentProviders(FirstPartComponent)
})
export class FirstPartComponent extends NgxSubFormComponent<Part1> {
  protected getFormControls(): Controls<Part1> {
    return {
      firstCtrl: new FormControl(),
      firstUnique: new FormControl('1'),
    }
  }
}