import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input()
  counterInChildfromParent = 0;

  counterInChild = 0;


  @Output()
  counterChangeEvent: EventEmitter<any> = new EventEmitter<any>()

  constructor() { }

  ngOnInit(): void {
  }

  increment() {
    this.counterInChild++;
    this.counterChangeEvent.emit(this.counterInChild);
  }

  decrement() {
    this.counterInChild--;

    this.counterChangeEvent.emit(this.counterInChild);
  }

}
