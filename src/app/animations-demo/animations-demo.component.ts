import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-animations-demo',
  templateUrl: './animations-demo.component.html',
  styleUrls: ['./animations-demo.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'blue'
      })),
      state('closed', style({
        height: '100px',
        width: '100px',
        opacity: 0.8,
        backgroundColor: 'orange'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ]
})
export class AnimationsDemoComponent implements OnInit {

  isOpen = true;


  constructor() { }
  toggle() {
    this.isOpen = !this.isOpen;
  }

  ngOnInit(): void {
  }

}
