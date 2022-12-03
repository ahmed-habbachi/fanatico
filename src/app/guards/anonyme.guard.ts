import { Injectable } from '@angular/core';
import { User } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnonymeGuard implements CanActivate {

  constructor(
    public fireAuth: AngularFireAuth,
    public router: Router,
    public toastController: ToastController
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return new Observable<boolean>((observer: Observer<boolean>) => this.fireAuth.user.subscribe(
        (user: User) => {
          if (!user) {
            return observer.next(true);
          }
          return observer.next(false);
        },
        (err) => {
          this.router.navigate(['/error']);
          observer.next(true);
        }
      ));
  }

  async presentToast() {
    const toast = await this.toastController.create({
      color: 'dark',
      message: 'You are already signed in!',
      duration: 2000
    });
    toast.present();
  }

}
