import { Component, OnInit } from '@angular/core';
import {IProduct} from './product'
import {ActivatedRoute} from '@angular/router'
import { ProductService } from './product.service';

@Component({
  // selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = "Product Details"
  product: IProduct
  errorMessage: string

  constructor(private productService: ProductService,private _route:ActivatedRoute) { }

  ngOnInit() {
    let id =  +this._route.snapshot.paramMap.get('id');
    console.log('id',id);
    this.getProduct(id)
  }

  getProduct(id: number) {
    this.productService.getProduct(id).subscribe(
      product => this.product = product,
      error => this.errorMessage = <any>error
    )
  }

}
