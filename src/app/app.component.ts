import { Component } from '@angular/core';
import { MainMenuEntry } from './interfaces/main-menu-entry.interface';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'fan-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appMainMenu: MainMenuEntry[] = [{
    caption: 'Home',
    link: '/home',
    iconName: 'home',
    iconColor: 'warning',
    iconSlot: 'start'
  },
  {
    caption: 'Sport Fields',
    link: 'configuration/sport-field',
    iconName: 'apps',
    iconColor: 'warning',
    iconSlot: 'start'
  },
  // {
  //   caption: 'Sport Field Types',
  //   link: 'configuration/sport-field-type',
  //   iconName: 'add-circle',
  //   iconColor: 'warning',
  //   iconSlot: 'start'
  // }
  ];

  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(private auth: AuthService) {}

  logout(){
    this.auth.signOut();
  }
}
