import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectiveDemoComponent } from './directive-demo/directive-demo.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { ProductHomeComponent } from './product-home/product-home.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProductsComponent } from './products/products.component';
import { ProductResolverService } from './services/products-resolver.service';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'navigation', component: NavigationComponent },
  { path: 'databinding', component: DataBindingComponent },
  { path: 'directive-demo', component: DirectiveDemoComponent },
  {
    path: 'products', component: ProductsComponent,
    children: [
      { path: 'productHome', component: ProductHomeComponent, resolve: { products: ProductResolverService } },
      { path: 'productCategory', component: ProductCategoryComponent },
      { path: 'productDetails/:id', component: ProductdetailsComponent },
      { path: '', redirectTo: 'productHome', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
