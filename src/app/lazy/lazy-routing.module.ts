import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectiveDemoComponent } from '../directive-demo/directive-demo.component';
import { MyreactiveComponent } from '../myreactive/myreactive.component';
import { MytemplatedrivenComponent } from '../mytemplatedriven/mytemplatedriven.component';
import { ParentComponent } from '../parent/parent.component';

const lazyroutes: Routes = [
    { path: 'directive-demo', component: DirectiveDemoComponent },
    { path: 'template-driven', component: MytemplatedrivenComponent },
    { path: 'reactive', component: MyreactiveComponent },
    { path: 'parent-child', component: ParentComponent },
]

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(lazyroutes),

    ],
    exports: [RouterModule]
})
export class LazyRoutingModule { }
