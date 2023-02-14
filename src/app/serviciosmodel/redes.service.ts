import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Redes } from '../model/redes';

@Injectable({
  providedIn: 'root'
})
export class RedesService {

  url = "https://profoliorenderljm.onrender.com/";

  constructor(private httpClient: HttpClient) { }

  public verRedes(): Observable<Redes>{
    return this.httpClient.get<Redes>(this.url + 'ver/redes');
}
}
