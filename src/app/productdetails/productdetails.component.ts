import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDataService } from '../services/product-data.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  constructor(private productservice: ProductDataService, private activatedroute: ActivatedRoute) { }
  product: any;
  ngOnInit() {
    debugger
    let id = +this.activatedroute.snapshot.params['id'];
    id = id + 1;

    this.productservice.getProductsById(id).subscribe((data) => {
      this.product = data;

    })
  }

}
