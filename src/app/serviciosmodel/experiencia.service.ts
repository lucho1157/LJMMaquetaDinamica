import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  url = "https://profoliorenderljm.onrender.com/";

  constructor(private httpClient: HttpClient) { }

  public verExperiencias(): Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(this.url + 'ver/experiencias');
  }

  public getById (id: number): Observable<Experiencia>{
    return this.httpClient.get<Experiencia>(this.url + `detailexp/${id}`);
  }

  public crearExperiencia(experience: Experiencia):Observable<any>{
    return this.httpClient.post<any>(this.url + 'new/experiencia', experience);
  }

  public editExperiencia(id: number, Experiencia: Experiencia):Observable<any>{
    return this.httpClient.put<any>(this.url + `experiencia/editar/{id}`, Experiencia);
  }

  public borrarExperiencia (id: number): Observable<any>{
    return this.httpClient.delete<any>(this.url + `experiencia/delete/${id}`);
  }
}
