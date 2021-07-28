import { NgModule } from '@angular/core';
import { TestComponent } from '../test/test.component';
import { LazyRoutingModule } from './lazy-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [TestComponent],
  imports: [
    SharedModule,
    LazyRoutingModule
  ],

  exports: []
})
export class LazyModule { }
