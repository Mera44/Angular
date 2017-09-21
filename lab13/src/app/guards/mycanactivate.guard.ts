import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { DbService } from '../db.service';
import { Injectable } from '@angular/core';

@Injectable()
export class MyCanActivateGuard implements CanActivate {
  id: number;
  data;
  constructor(DbSer: DbService) { this.data =  DbSer.getData(); }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
      this.id = route.params.id;
  for ( const s of this.data) {
           if ( s.id == this.id) {
             return true;
           }
    }
     return false;
  }
}

