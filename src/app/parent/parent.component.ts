import { Component, ComponentFactoryResolver, EventEmitter, OnInit, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { ChildComponent } from '../child/child.component';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  counterInParent = 0;
  counterFromChild = 0;

  @ViewChild(ChildComponent, { static: true })
  child: any;

  constructor(private viewContainerRef: ViewContainerRef,
    private cfr: ComponentFactoryResolver) {

  }

  ngOnInit(): void {
    debugger;
    console.log(this.child);

  }


  increment() {
    this.counterInParent++;

  }

  decrement() {
    this.counterInParent--;
  }

  eventHandler(event: any) {
    this.counterFromChild = event;
  }
}
