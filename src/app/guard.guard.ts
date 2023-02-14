import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticacionService } from './autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {

  constructor(private autService: AutenticacionService, private router: Router)
  {}


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      let currentUser=this.autService.usuarioAutenticado;
    if(currentUser && currentUser.id)
    { 
      return true;
    }
    else
    {
      this.router.navigate(['']);
      return false;
    }
  }
  
}
