import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/modules/shared/shared.module';
import { ConfigurationPageRoutingModule } from './configuration-routing.module';

import { ConfigurationPage } from './configuration.page';

@NgModule({
  imports: [
    SharedModule,
    ConfigurationPageRoutingModule
  ],
  declarations: [ConfigurationPage]
})
export class ConfigurationPageModule {}
