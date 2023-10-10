import { Injectable } from '@angular/core';

import { Observable, Subject, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
    //FUNÇÃO RESPONSÁVEL POR ENVIAR A AÇÃO DO CLICK DO NAVBAR PRO SIDEBAR
    private subject = new Subject<any>();

    sendClickEvent(event: boolean) {
      this.subject.next(event);
    }

    getClickEvent(): Observable<any> {
      return this.subject.asObservable();
    }
}
