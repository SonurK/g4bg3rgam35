import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../modules/features/login/login.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'shipping',
    loadChildren: '../modules/features/shipping/shipping.module#ShippingModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'product',
    loadChildren: '../modules/features/product/product.module#ProductModule'
  },
  /* { path: 'shipping/shipping-label-maker/:name', component: ShippingLabelMakerComponent }, */
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
