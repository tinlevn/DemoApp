import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CanLeave } from '../services/route-guards/deactivate-guard.service';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements CanLeave, OnInit {

  message = "Hello Class";
  flag = true;
  color = 'blue';
  eventBindingText = '';
  constructor() { }

  ngOnInit(): void {
  }

  canDeactivate() {
    debugger
    const confirmResult = confirm('Are you sure you want to leave this page ? ');
    if (confirmResult === true) {
      return true;
    } else {
      return false;
    }
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
