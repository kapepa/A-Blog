import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IFormData, IPost} from "../../dto";
import {FormGroup, FormControl, Validators, FormBuilder} from "@angular/forms";
import {AngularEditorConfig} from "@kolkov/angular-editor";
import {Observable} from "rxjs";

@Component({
  selector: 'app-form-dynamic',
  templateUrl: './form-dynamic.component.html',
  styleUrls: ['./form-dynamic.component.scss']
})
export class FormDynamicComponent implements OnInit {
  @Input() formData!: IFormData;
  @Output() submitForm: EventEmitter<any> = new EventEmitter<any>();

  form!: FormGroup;
  validate = {
    required: Validators.required,
    minLength: Validators.minLength(4),
  }
  editorConfig: AngularEditorConfig = {
    outline: false,
    enableToolbar: false,
    editable: true,
    spellcheck: true,
    minHeight: '15rem',
    maxHeight: '15rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    sanitize: true,
    toolbarPosition: 'top',
    defaultFontName: 'Comic Sans MS',
    defaultFontSize: '4',
    defaultParagraphSeparator: 'p',
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    toolbarHiddenButtons: [[],[
      'insertVideo',
      'fontSize',
      'textColor',
      'backgroundColor',
    ]]
  }

  htmlContent = ''

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    const prepareValue = this.formData.input.reduce(( accum, input ) => {
      const validators = input.validate?.map((key) => { if(!!key) return this.validate[key] as any } )
      accum[input.name] = new FormControl('', validators);
      return accum;
    }, {} as any);

    this.form = this.formBuilder.group(prepareValue);
  }


  onSubmit(e: Event) {
    e.preventDefault();
    const form = new FormData();
    const values = this.form.value;
    Object.keys(values).forEach( key => form.append(key, values[key]));

    this.submitForm.emit(form);
  }


}
