import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/modules/shared/shared.module';
import { SportFieldFormComponent } from './sport-field-form/sport-field-form.component';
import { SportFieldPageRoutingModule } from './sport-field-routing.module';

import { SportFieldPage } from './sport-field.page';

@NgModule({
  imports: [
    SharedModule,
    SportFieldPageRoutingModule
  ],
  declarations: [
    SportFieldFormComponent,
    SportFieldPage
  ]
})
export class SportFieldPageModule {}
