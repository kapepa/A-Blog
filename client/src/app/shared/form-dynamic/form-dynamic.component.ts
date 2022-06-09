import {Component, Input, OnInit} from '@angular/core';
import {IFormData} from "../../dto";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: 'app-form-dynamic',
  templateUrl: './form-dynamic.component.html',
  styleUrls: ['./form-dynamic.component.scss']
})
export class FormDynamicComponent implements OnInit {
  @Input() formData!: IFormData;
  form!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    const prepareValue = this.formData.input.reduce(( accum, input ) => {
      accum[input.name] = new FormControl('')
      return accum;
    },{} as any);

    this.form = new FormGroup(prepareValue)
  }

  onSubmit() {
    console.log(this.form.value)
  }
}
