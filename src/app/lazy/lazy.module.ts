import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const lazyroutes: Routes = [


]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(lazyroutes)
  ],
  exports: [RouterModule]
})
export class LazyModule { }
