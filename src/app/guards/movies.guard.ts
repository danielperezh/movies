import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MoviesGuard implements CanActivate {

  constructor(
    private router: Router
  ){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if(sessionStorage.getItem('requestToken') && sessionStorage.getItem('loginFag')){
      return true;
    }
    this.router.navigate(['iniciar-sesion']);
    return false;
  }

}
