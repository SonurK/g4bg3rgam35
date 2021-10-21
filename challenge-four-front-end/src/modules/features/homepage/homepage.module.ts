import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageComponent } from './homepage.component';
import { PipesModule } from 'src/pipes/pipes.module';
import { HomepageRoutingModule } from './homepage-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  /* Lazy Loading Modules */
  declarations: [
    HomepageComponent,
  ],
  imports: [
    SharedModule,
    PipesModule,

    CommonModule,
    HomepageRoutingModule
  ]
})
export class HomepageModule { }
