import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private router: Router) { }
  counter = 0;
  ngOnInit(): void {
  }

  navigate() {
    this.router.navigate(['/products/productDetails', this.counter++])
  }
}
