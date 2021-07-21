import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDataService } from '../services/product-data.service';

@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.css']
})
export class ProductHomeComponent implements OnInit {

  products: any;
  constructor(private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    // this.productservice.getProducts().subscribe((products) => {
    //   this.products = products;
    // })

    this.products = this.activatedroute.snapshot.data['products'];
  }

}
