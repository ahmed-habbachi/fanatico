import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfigurationPage } from './configuration.page';

const routes: Routes = [
  {
    path: '',
    component: ConfigurationPage
  },
  // {
  //   path: 'sport-field-type',
  //   loadChildren: () => import('./sport-field-type/sport-field-type.module').then( m => m.SportFieldTypePageModule)
  // },
  {
    path: 'sport-field',
    loadChildren: () => import('./sport-field/sport-field.module').then( m => m.SportFieldPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfigurationPageRoutingModule {}
