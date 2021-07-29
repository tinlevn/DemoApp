import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { User } from '../data/user';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {
  dateVal: Date = new Date();
  users: User[] = [
    { name: "Paul" },
    { name: "Kelly" },
    { name: "Raj" },
    { name: "Sam" },
    { name: "Roger" },
    { name: "Lily" },
  ];

  data = of([1, 2, 3, 4, 5]);

  searchTerm: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  changeByReference(item: string) {
    const refUsers: User[] = Object.assign([], this.users);
    // or 
    // const refUsers= [...this.users];
    // or
    // const refUsers = this.users.slice()

    refUsers[0].name = item;
    this.users = refUsers
  }

  changeByProperty(item: string) {
    this.users[0].name = item;
  }

}
