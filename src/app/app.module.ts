import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectiveDemoComponent } from './directive-demo/directive-demo.component';
import { FormsModule } from '@angular/forms';
import { RoundBlockDirectiveDirective } from './directives/round-block-directive.directive';
import { LogDirectiveDirective } from './directives/log-directive.directive';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductHomeComponent } from './product-home/product-home.component';
import { ProductCategoryComponent } from './product-category/product-category.component'
import { ProductResolverService } from './services/products-resolver.service';
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
    ProductCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ProductResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
