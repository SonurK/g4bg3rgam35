import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../modules/features/login/login.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('../modules/features/login/login.module').then(m => m.LoginModule),
    component: LoginComponent
  },
  {
    path: 'homepage',
    loadChildren: () => import('../modules/features/homepage/homepage.module').then(m => m.HomepageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'shipping',
    loadChildren: () => import('../modules/features/shipping/shipping.module').then(m => m.ShippingModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'product',
    loadChildren: () => import('../modules/features/product/product.module').then(m => m.ProductModule)
  },
  /* { path: 'shipping/shipping-label-maker/:name', component: ShippingLabelMakerComponent }, */
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
