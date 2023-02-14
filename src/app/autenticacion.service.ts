import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  url="https://profoliorenderljm.onrender.com/aut/login";
  currentUserSubject:BehaviorSubject<any>;
  sessionStorage: any;

  constructor(private http:HttpClient) {
    this.currentUserSubject=new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')||'{}'));
   }

   loginUsuario(credenciales:any):Observable<any>{ 
    var httpOptions = {                
      headers: new HttpHeaders({
      'Content-Type' : 'application/json'
      }),
            }
    return this.http.post<any>(this.url, credenciales, httpOptions).pipe(map(data => {
      sessionStorage.setItem('currentUser', JSON.stringify(data));
      this.currentUserSubject.next(data);
      console.log("aut service esta corriendo "+ JSON.stringify(data));
      return data;
          }));
  }

  get usuarioAutenticado() {
    return this.currentUserSubject.value;
  }
  
}

