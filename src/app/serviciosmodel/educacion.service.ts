import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  url = "https://profoliorenderljm.onrender.com/";

  constructor(private httpClient: HttpClient) { }

  public verEducacion(): Observable<Educacion[]>{
    return this.httpClient.get<Educacion[]>(this.url + 'ver/educacion');
  }

  public getById (id: number): Observable<Educacion>{
    return this.httpClient.get<Educacion>(this.url + `detailedu/${id}`);
  }

  public crearEducacion(school: Educacion):Observable<any>{
    return this.httpClient.post<any>(this.url + 'new/educacion', school);
  }

  public borrarEducacion (id: number): Observable<any>{
    return this.httpClient.delete<any>(this.url + `educacion/delete/${id}`);
  }
}
