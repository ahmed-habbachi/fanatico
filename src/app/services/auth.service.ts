import { Injectable } from '@angular/core';
import { User } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private router: Router,
    public toastController: ToastController) {
  }

  get currentUser(): Observable<User>{
    return this.fireAuth.user;
  }

  login(email: string, password: string) {
    this.fireAuth.signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        if (userCredential) {
          // localStorage.setItem('user', JSON.stringify(userCredential.user));
          // this.currentUser = userCredential.user;
          this.router.navigate(['/home']);
        }
      })
      .catch(error => {
        console.error(error);
      });
  }

  signOut() {
    return this.fireAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['/login']);
    });
  }

  createNewUser(userInfo: User, password: string) {
    this.fireAuth.createUserWithEmailAndPassword(userInfo.email, password)
      .then(userCredential => {
        userCredential.user.updateProfile({
          displayName: userInfo.displayName
        });
        this.sendVerificationMail();
        this.presentToast('Check your email');
        this.insertUserData(userInfo, userCredential)
          .then(() => {
            this.router.navigate(['/login']);
          });
      });
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      color: 'dark',
      message,
      duration: 3000
    });
    toast.present();
  }

  private insertUserData(user: User, userCredential: firebase.default.auth.UserCredential) {
    return this.firestore.doc('users/' + userCredential.user.uid).set({
      name: user.displayName,
      phoneNumber: user.phoneNumber,
      photoURL: user.photoURL
    });
  }

  private sendVerificationMail() {
    return this.fireAuth.currentUser.then((user) => user.sendEmailVerification());
  }
}
