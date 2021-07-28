import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  counterForLifeClycleHooks = 0;
  flag = true;
  constructor() { }

  ngOnInit(): void {
  }

  increment() {
    this.counterForLifeClycleHooks++;
  }
  toggleLifecycleComponent() {
    this.flag = !this.flag;
  }
  nochange() {
    ;
  }

}
