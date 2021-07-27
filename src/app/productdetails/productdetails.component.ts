import { AfterViewChecked, Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDataService } from '../services/product-data.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  id = 0;
  constructor(private productservice: ProductDataService, private activatedroute: ActivatedRoute) { }
  product: any;

  ngOnInit() {

    this.id = +this.activatedroute.snapshot.params['id'] + 1;  // snapshot way
    this.loadData(this.id);



    // this.activatedroute.params.subscribe(params => {  // observable way
    //   this.id = +params['id'] + 1;
    //   debugger;
    //   this.loadData(this.id);
    // })

  }





  loadData(id: any) {
    this.productservice.getProductsById(id).subscribe((data) => {
      debugger;
      this.product = data;
    })
  }
}
