import { Component, OnDestroy, OnInit } from '@angular/core';
import { AlertService } from "../service/alert.service";
import { Subscription } from "rxjs";

interface IAlert {
  type: '' | 'success' | 'warning' | 'wrong';
  text: string;
}

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, OnDestroy {
  listAlert: Map<number, IAlert> = new Map<number, IAlert>();
  type: '' | 'success' | 'warning' | 'wrong' = '';
  text: string = '';
  subAlert!: Subscription

  constructor(
    private alertService: AlertService,
  ) { }

  ngOnInit(): void {
    this.subAlert = this.alertService.alert$.subscribe((alert) => {
      const key = Date.now();
      this.listAlert.set(key, alert)

      const timer = setTimeout(() => {
        this.listAlert.delete(key);
        clearTimeout(timer);
      },3000)
    })
  }

  ngOnDestroy(): void {
    this.subAlert.unsubscribe();
  }

}
