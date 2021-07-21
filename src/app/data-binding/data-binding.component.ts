import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  message = "Hello Class";
  flag = true;
  color = 'blue';
  eventBindingText = '';
  constructor() { }

  ngOnInit(): void {
  }

  greet(message: string) {
    return "Good Morning   " + message;
  }

  ToggleButton() {
    this.flag = !this.flag;
  }

  propBindingMethod(event: any) {
    debugger
    //console.log(event)

    this.eventBindingText = event.value;
  }

}
