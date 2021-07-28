import { NgModule } from '@angular/core';
import { LazyRoutingModule } from './lazy-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ParentComponent } from '../parent/parent.component';
import { ChildComponent } from '../child/child.component';
import { MyreactiveComponent } from '../myreactive/myreactive.component';
import { DirectiveDemoComponent } from '../directive-demo/directive-demo.component';
import { MytemplatedrivenComponent } from '../mytemplatedriven/mytemplatedriven.component';



@NgModule({
  declarations: [
    ParentComponent,
    MyreactiveComponent,
    DirectiveDemoComponent,
    MytemplatedrivenComponent,
    ChildComponent,
  ],
  imports: [
    SharedModule,
    LazyRoutingModule
  ],

  exports: []
})
export class LazyModule { }
