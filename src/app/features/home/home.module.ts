import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/modules/shared/shared.module';
import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';

@NgModule({
  imports: [
    SharedModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
