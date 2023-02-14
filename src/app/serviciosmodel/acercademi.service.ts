import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Acercademi } from '../model/acercademi';

@Injectable({
  providedIn: 'root'
})
export class AcercademiService {

  url = "https://profoliorenderljm.onrender.com/";

  constructor(private httpClient: HttpClient) { }

  public verPersonas(): Observable<Acercademi>{
    return this.httpClient.get<Acercademi>(this.url + 'ver/personas');
  }

  public crearPersona(persona: Acercademi):Observable<any>{
    return this.httpClient.put<any>(this.url + 'personas/edit' ,persona);
  }

  public buscarPersona (id: number): Observable<Acercademi>{
    return this.httpClient.get<Acercademi>(this.url + `detail/${id}`);
  }
}
