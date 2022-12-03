import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/modules/shared/shared.module';
import { SportFieldPageRoutingModule } from './sport-field-routing.module';

import { SportFieldPage } from './sport-field.page';

@NgModule({
  imports: [
    SharedModule,
    SportFieldPageRoutingModule
  ],
  declarations: [SportFieldPage]
})
export class SportFieldPageModule {}
