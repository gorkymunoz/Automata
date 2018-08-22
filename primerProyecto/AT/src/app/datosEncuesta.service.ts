import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class DatosEncuestaService {

  private fuenteMensaje = new BehaviorSubject<any>([]);
  currentMessage = this.fuenteMensaje.asObservable();

  constructor() { }

  changeMessage(message){
    this.fuenteMensaje.next(message)
  }
}
