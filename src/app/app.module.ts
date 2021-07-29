import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProductHomeComponent } from './product-home/product-home.component';
import { ProductCategoryComponent } from './product-category/product-category.component'
import { ProductResolverService } from './services/route-guards/products-resolver.service';
import { CanActivateAuthGaurdService } from './services/route-guards/can-activate-authgaurd.service';
import { DeactivateGaurdService } from './services/route-guards/deactivate-guard.service';
import { MyobservableComponent } from './my-observable/myobservable.component';
import { ErrorComponent, } from './Error/error.component';
import { SharedModule } from './shared/shared.module';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { LifeCycleHooksComponent } from './life-cycle-hooks/life-cycle-hooks.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    ProductsComponent,
    ProductdetailsComponent,
    ProductHomeComponent,
    ProductCategoryComponent,
    MyobservableComponent,
    DataBindingComponent,
    ErrorComponent,
    LifeCycleHooksComponent,
    PipeDemoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [ProductResolverService, CanActivateAuthGaurdService, DeactivateGaurdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
