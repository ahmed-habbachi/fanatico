import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BaseComponent } from 'src/app/interfaces/base-component.class';
import { SportFieldService } from 'src/app/services';

@Component({
  selector: 'fan-sport-field',
  templateUrl: './sport-field.page.html',
  styleUrls: ['./sport-field.page.scss'],
})
export class SportFieldPage implements OnInit, OnDestroy {

  subscriptions: Subscription[] = [];

  constructor(
    public sportFieldService: SportFieldService
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
}
