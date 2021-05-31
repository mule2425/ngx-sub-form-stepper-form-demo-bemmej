import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgxSubFormComponent, DataInput, Controls, subformComponentProviders } from 'ngx-sub-form';
import { Part3 } from '../../stepper-form.interface';

@Component({
  selector: 'app-third-part',
  templateUrl: './third-part.component.html',
  styleUrls: ['./third-part.component.css'],
  providers: subformComponentProviders(ThirdPartComponent)
})
export class ThirdPartComponent extends NgxSubFormComponent<Part3> {
  protected getFormControls(): Controls<Part3> {
    return {
      thirdUnique: new FormControl(),
    }
  }
}