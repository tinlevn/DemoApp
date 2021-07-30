import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
  // ...
} from '@angular/animations';
import { User } from '../data/user';

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

    trigger('list', [
      state('starting', style({
        opacity: 1, transform: 'translateX(0px)'
      })),
      transition('void=>*', [
        style({
          opacity: 0, transform: 'translateX(-100px)'
        }),
        animate(300)
      ]),
      transition('*=>void', [

        animate(300, style({
          opacity: 0, transform: 'translateX(100px)'
        }))
      ]),

    ]),

    trigger('list2', [
      state('starting', style({
        opacity: 1, transform: 'translateX(0px)'
      })),

      transition('void=>*', [
        animate(1000, keyframes([
          style({
            opacity: 1, transform: 'translateX(600px)', offset: '0'
          }),
          style({
            opacity: 0.6, transform: 'translateX(300px)', offset: '.3'
          }),
          style({
            opacity: 0.3, transform: 'translateX(150px)', offset: '0.6'
          }),
          style({
            opacity: 0, transform: 'translateX(0px)', offset: '1'
          }),
        ]))
      ])
      ,

      transition('*=>void', [
        animate(2000, keyframes([
          style({
            opacity: 1, transform: 'translateX(0px)', offset: '0'
          }),
          style({
            opacity: 0.6, transform: 'translateX(150px)', offset: '.3'
          }),
          style({
            opacity: 0.3, transform: 'translateX(300px)', offset: '0.6'
          }),
          style({
            opacity: 0, transform: 'translateX(600px)', offset: '1'
          }),
        ]))
      ]),

    ])
  ]
})
export class AnimationsDemoComponent implements OnInit {

  isOpen = true;
  users: User[] = [
    { name: "Paul" },
    { name: "Kelly" },
    { name: "Raj" },
    { name: "Sam" },
    { name: "Roger" },
    { name: "Lily" },
  ];
  users2: User[] = [
    { name: "Paul" },
    { name: "Kelly" },
    { name: "Raj" },
    { name: "Sam" },
    { name: "Roger" },
    { name: "Lily" },
  ];


  constructor() { }
  toggle() {
    this.isOpen = !this.isOpen;
  }

  ngOnInit(): void {
  }

  removeUser(i: number) {
    if (i > -1) {
      this.users.splice(i, 1);
    }

  }

  addUser(username: string) {
    if (username) {
      let user = { name: username };
      this.users.splice(0, 0, user);
    }

  }


  removeUser2(i: number) {
    if (i > -1) {
      this.users2.splice(i, 1);
    }

  }

  addUser2(username: string) {
    if (username) {
      let user = { name: username };
      this.users2.splice(0, 0, user);
    }

  }

}

