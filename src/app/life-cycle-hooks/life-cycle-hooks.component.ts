import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle-hooks',
  templateUrl: './life-cycle-hooks.component.html',
  styleUrls: ['./life-cycle-hooks.component.css']
})
export class LifeCycleHooksComponent implements OnChanges,
  OnInit, OnDestroy, DoCheck, AfterViewInit, AfterViewChecked,
  AfterContentInit, AfterContentChecked {

  @Input() counter = 0
  constructor() { }

  ngOnChanges(chahges: SimpleChanges) {
    console.log(chahges);
    console.log("ngOnChanges Called");
  }

  ngOnInit(): void {
    console.log("ngOnInit Called");
  }

  ngDoCheck() {

    console.log("ngDoCheck Called");
  }
  ngAfterContentInit() {
    console.log("ngAfterContentInit Called");
  }
  ngAfterContentChecked() {
    console.log("ngAfterContentChecked Called");

  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit Called");
  }
  ngAfterViewChecked() {
    console.log("ngAfterViewChecked Called");
  }
  ngOnDestroy() {
    console.log("ngOnDestroy Called");
  }



}
