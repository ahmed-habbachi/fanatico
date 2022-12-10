import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { BaseComponent } from 'src/app/interfaces/base-component.class';
import { SportFieldService } from 'src/app/services';
import { SportFieldFormComponent } from './sport-field-form/sport-field-form.component';

@Component({
  selector: 'fan-sport-field',
  templateUrl: './sport-field.page.html',
  styleUrls: ['./sport-field.page.scss'],
})
export class SportFieldPage implements OnInit, OnDestroy {

  subscriptions: Subscription[] = [];

  constructor(
    public sportFieldService: SportFieldService,
    public ctrl: ModalController
  ) {
  }

  ngOnInit(): void {
    // super.subscriptions.push(
    // );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
    this.subscriptions = [];
  }

  async addSportField() {
    const modal = await this.ctrl.create({
      component: SportFieldFormComponent
    });
    await modal.present();
  }
}
