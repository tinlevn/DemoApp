import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectiveDemoComponent } from './directive-demo/directive-demo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoundBlockDirectiveDirective } from './directives/round-block-directive.directive';
import { LogDirectiveDirective } from './directives/log-directive.directive';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductHomeComponent } from './product-home/product-home.component';
import { ProductCategoryComponent } from './product-category/product-category.component'
import { ProductResolverService } from './services/route-guards/products-resolver.service';
import { CanActivateAuthGaurdService } from './services/route-guards/can-activate-authgaurd.service';
import { DeactivateGaurdService } from './services/route-guards/deactivate-guard.service';
import { MytemplatedrivenComponent } from './mytemplatedriven/mytemplatedriven.component';
import { MyobservableComponent } from './my-observable/myobservable.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { MyreactiveComponent } from './myreactive/myreactive.component';
import { ErrorComponent, } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DataBindingComponent,
    DirectiveDemoComponent,
    RoundBlockDirectiveDirective,
    LogDirectiveDirective,
    HomeComponent,
    ProductsComponent,
    ProductdetailsComponent,
    ProductHomeComponent,
    ProductCategoryComponent,
    MytemplatedrivenComponent,
    MyobservableComponent,
    ParentComponent,
    ChildComponent,
    MyreactiveComponent,
    ErrorComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ProductResolverService, CanActivateAuthGaurdService, DeactivateGaurdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
