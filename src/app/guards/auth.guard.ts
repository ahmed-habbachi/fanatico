import { Injectable } from '@angular/core';
import { User } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    public fireAuth: AngularFireAuth,
    public router: Router,
    public toastController: ToastController
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return new Observable<boolean>((observer: Observer<boolean>) => this.fireAuth.user.subscribe(
          (user: User) => {
            if (!user) {
              this.presentToast();
              this.router.navigate(['login']);
              return observer.next(false);
            }
            return observer.next(true);
          },
          (err) => {
            this.router.navigate(['/error']);
            observer.next(false);
          }
        ));
  }

  async presentToast() {
    const toast = await this.toastController.create({
      color: 'dark',
      message: 'Access Denied, Login is Required to Access This Page!',
      duration: 3000
    });
    toast.present();
  }


}
