import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDefinitionComponent } from './product-definition/product-definition.component';
import { ProductResumeComponent } from './product-resume/product-resume.component';
import { AuthGuard } from '../../../guards/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: ProductDefinitionComponent,
    children: [
      {
        path: 'resume',
        component: ProductResumeComponent,
        canActivate: [AuthGuard]
      }
    ],
  },
  {
    path: 'final',
    component: ProductResumeComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
