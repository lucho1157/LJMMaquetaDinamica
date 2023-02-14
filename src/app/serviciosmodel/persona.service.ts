import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  url = "http://localhost:8080/";

  constructor(private httpClient: HttpClient) { }

  public verPersonas(): Observable<Persona>{
    return this.httpClient.get<Persona>(this.url + 'ver/personas');

  }
}
