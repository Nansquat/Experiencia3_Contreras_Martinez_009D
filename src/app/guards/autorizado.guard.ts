import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Router} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthserviceService } from '../services/authservice.service';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AutorizadoGuard{
  constructor( private authservice:AuthserviceService,
               private toast:ToastController,
               private router:Router){

               }

  canActivate():

          | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
                if (!this.authservice.IsLoggedIn()){
                  this.showToast('Debe iniciar sesión..');
                  this.router.navigateByUrl('/login');
                  return false;
                }
                else{
                  this.authservice.IsLoggedIn();
                  return true;
                }
              }
              async showToast(msg: any) {
                const toast = await this.toast.create({
                  message:msg,
                  duration: 3000
                });
                toast.present();
              }
            }