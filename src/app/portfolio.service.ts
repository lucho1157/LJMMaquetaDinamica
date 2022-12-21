import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  @Output() disparadorDeEdicion: EventEmitter<any> = new EventEmitter();



  constructor(private http: HttpClient) { }

  obtenerDatos (): Observable<any> {
    return this.http.get('./assets/Data/data.json');
    
  }

}
