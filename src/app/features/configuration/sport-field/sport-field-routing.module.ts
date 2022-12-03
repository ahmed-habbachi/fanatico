import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SportFieldPage } from './sport-field.page';

const routes: Routes = [
  {
    path: '',
    component: SportFieldPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SportFieldPageRoutingModule {}
