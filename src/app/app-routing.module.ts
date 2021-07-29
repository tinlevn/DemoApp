import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectiveDemoComponent } from './directive-demo/directive-demo.component';
import { ErrorComponent } from './Error/error.component';
import { HomeComponent } from './home/home.component';
import { LifeCycleHooksComponent } from './life-cycle-hooks/life-cycle-hooks.component';

import { MyobservableComponent } from './my-observable/myobservable.component';
import { MyreactiveComponent } from './myreactive/myreactive.component';
import { MytemplatedrivenComponent } from './mytemplatedriven/mytemplatedriven.component';
import { ParentComponent } from './parent/parent.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';

import { ProductCategoryComponent } from './product-category/product-category.component';
import { ProductHomeComponent } from './product-home/product-home.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProductsComponent } from './products/products.component';
import { CanActivateAuthGaurdService } from './services/route-guards/can-activate-authgaurd.service';
import { DeactivateGaurdService } from './services/route-guards/deactivate-guard.service';
import { ProductResolverService } from './services/route-guards/products-resolver.service';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'databinding', component: DataBindingComponent, canDeactivate: [DeactivateGaurdService], canActivate: [CanActivateAuthGaurdService] },
  { path: 'my-observable', component: MyobservableComponent },
  { path: 'lifecyclehooks', component: LifeCycleHooksComponent },
  { path: 'pipe-demo', component: PipeDemoComponent },
  {
    path: 'products', component: ProductsComponent,
    children: [
      { path: 'productHome', component: ProductHomeComponent, resolve: { products: ProductResolverService } },
      { path: 'productCategory', component: ProductCategoryComponent },
      { path: 'productDetails/:id', component: ProductdetailsComponent },
      { path: '', redirectTo: 'productHome', pathMatch: 'full' }
    ]
  },
  { path: 'lazy', loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule) },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
