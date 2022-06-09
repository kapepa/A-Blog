import {Component, Input, OnInit} from '@angular/core';
import {IFormData} from "../../dto";
import {FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-dynamic',
  templateUrl: './form-dynamic.component.html',
  styleUrls: ['./form-dynamic.component.scss']
})
export class FormDynamicComponent implements OnInit {
  @Input() formData!: IFormData;
  form!: FormGroup;
  validate = {
    required: Validators.required,
    minLength: Validators.minLength(4),
  }

  constructor() { }

  ngOnInit(): void {
    const prepareValue = this.formData.input.reduce(( accum, input ) => {
      const validators = input.validate?.map((key) => { if(!!key) return this.validate[key] as any } )
      accum[input.name] = new FormControl('', validators);
      return accum;
    },{} as any);
    this.form = new FormGroup(prepareValue);
    console.log(this.form)
  }

  onSubmit() {

  }


}
