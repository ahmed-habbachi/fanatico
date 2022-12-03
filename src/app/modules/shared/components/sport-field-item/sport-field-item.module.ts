import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/modules/shared/shared.module';
import { SportFieldItemComponent } from './sport-field-item.component';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [SportFieldItemComponent],
  exports:[
    SportFieldItemComponent
  ]
})
export class SportFieldItemModule {}
