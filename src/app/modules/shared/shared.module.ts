import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SportFieldItemComponent } from './components/sport-field-item/sport-field-item.component';

@NgModule({
  declarations: [
    SportFieldItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    // SportFieldItemModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    // SportFieldItemModule,
    SportFieldItemComponent
  ]
})
export class SharedModule {}
