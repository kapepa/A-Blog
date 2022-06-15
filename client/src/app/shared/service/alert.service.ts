import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

interface IAlert {
  type: 'success' | 'warning' | 'wrong',
  text: string,
}

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  public alert$: Subject<IAlert> = new Subject<IAlert>();

  constructor() { }

  success(text: string) {
    return this.alert$.next({type: 'success', text: text})
  }

  warning(text: string) {
    return this.alert$.next({type: 'warning', text: text})
  }

  wrong(text: string) {
    return this.alert$.next({type: 'wrong', text: text})
  }
}
