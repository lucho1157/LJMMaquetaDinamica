import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyectos } from '../model/proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  url = "https://profoliorenderljm.onrender.com/";

  constructor(private httpClient: HttpClient) { }

  public verProyectos(): Observable<Proyectos[]>{
    return this.httpClient.get<Proyectos[]>(this.url + 'ver/proyectos');
  }

  public getById (id: number): Observable<Proyectos>{
    return this.httpClient.get<Proyectos>(this.url + `detailpro/${id}`);
  }

  public crearProyecto(project: Proyectos):Observable<any>{
    return this.httpClient.post<any>(this.url + 'new/proyecto' ,project);
  }

  public borrarProyecto (id: number): Observable<any>{
    return this.httpClient.delete<any>(this.url + `proyecto/delete/${id}`);
  }

  public editProyecto (id: number, Proyectos:Proyectos): Observable<any>{
    return this.httpClient.put<any>(this.url + `proyecto/editar/${id}`, Proyectos);
  }

}
