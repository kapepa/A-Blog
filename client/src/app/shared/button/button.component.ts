import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() link: boolean = true;
  @Input() text!: string;
  @Input() href!: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  linkClick() {
    if( this.href ) this.router.navigate([this.href]);
  }
}
