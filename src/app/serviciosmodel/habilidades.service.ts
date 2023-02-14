import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidades } from '../model/habilidades';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {
  url = "https://profoliorenderljm.onrender.com/";

  constructor(private httpClient: HttpClient) { }

  public verHabilidad(): Observable<Habilidades[]>{
    return this.httpClient.get<Habilidades[]>(this.url + 'ver/habilidades');
  }

  public getById (id: number): Observable<Habilidades>{
    return this.httpClient.get<Habilidades>(this.url + `detailhab/${id}`);
  }

  public crearHabilidad(skil: Habilidades):Observable<any>{
    return this.httpClient.post<any>(this.url + 'new/habilidad' ,skil);
  }

  public borrarHabilidad (id: number): Observable<any>{
    return this.httpClient.delete<any>(this.url + `habilidad/delete/${id}`);
  }

  
}
