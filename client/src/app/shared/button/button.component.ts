import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

enum EType {
  button,
  submit,
  reset,
}

enum ESize {
  large,
  average,
  small
}

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() link: boolean = true;
  @Input() text!: string;
  @Input() href!: string;
  @Input() cb!: () => void;
  @Input() type: keyof typeof EType = 'button';
  @Input() size: keyof typeof ESize = 'average';
  @Input() disabled: boolean = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  linkClick() {
    if( this.href ) this.router.navigate([this.href]);
    if( this.cb ) this.cb()
  }
}
