import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductDefinitionComponent } from './product-definition/product-definition.component';
import { ProductResumeComponent } from './product-resume/product-resume.component';
import { SharedModule } from '../../../modules/shared/shared.module';
import { PipesModule } from 'src/pipes/pipes.module';
import { ProductAdditionComponent } from './product-addition/product-addition.component';


@NgModule({
  /* Lazy Loading Modules */
  declarations: [
    ProductDefinitionComponent,
    ProductResumeComponent,
    ProductAdditionComponent,
  ],
  imports: [
    SharedModule,
    PipesModule,

    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
