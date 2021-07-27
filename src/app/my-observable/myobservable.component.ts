import { Component, OnInit } from '@angular/core';
import { from, interval, observable, Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { ProductDataService } from '../services/product-data.service';


@Component({
  selector: 'app-myobservable',
  templateUrl: './myobservable.component.html',
  styleUrls: []
})
export class MyobservableComponent implements OnInit {

  customObservable: any;
  counter = 0
  products: any;
  constructor(private dtaservice: ProductDataService) { }

  ngOnInit() {
    ///////////////////////////////observablele example 1 ////////////////////////////////
    let x = interval(2000);
    x.subscribe((data) => {
      console.log(data);
    })
    //---------------------------------------------------------------------------------------//

    //-----------------------------   observablele example 2--------------------------------//

    let srcArray = from([1, 2, 'A', 4]).pipe(
      map(val => {
        let result = val as number * 2;
        if (Number.isNaN(result)) {
          console.log('Errors Occurred in Stream')
          throw new Error("Result is NaN")
        }
        return result
      }),
    );
    srcArray.subscribe(x => console.log(x), err => console.log(err));
    //-----------------------------------------------------------------------------------------//


    //-----------------------------   observablele example 3--------------------------------//

    this.customObservable = new Observable((obsever) => {
      setInterval(() => {
        if (this.counter < 8) {
          obsever.next(this.counter++);
        }
        if (this.counter >= 5) {
          obsever.complete();
        }

        if (this.counter >= 8) {
          obsever.error("Somthing went wrong");
        }

      }, 1000)

    });

    this.customObservable.subscribe((data: any) => {
      console.log(data);
    }, (errr: any) => {
      console.log(errr);
    }, () => {
      console.log("No more data from source anymore. its is completed");
    });

  }
  //-----------------------------------------------------------------------------------------//


  myEventHandler() {
    this.products = this.dtaservice.getProducts().subscribe((emp) => {

      this.products = emp
    }, (err) => {
      debugger
      console.log(err);
    });
  }

}
