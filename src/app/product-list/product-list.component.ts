import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  pageTitle:string = "Products Page"
  imageWidth: number = 50
  imageMargin: number = 2
  showImage: boolean = false
  // listFilter: String = 'cart'
  _listFilter: string;  
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    console.log('changing');
    this.filteredProducts =  this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }
  filteredProducts: IProduct[];
  products: IProduct[] = [];


  constructor(private _productService: ProductService, private router: Router) {     
    // this.listFilter = '';
  }

  ngOnInit(): void {
    // this.products = 
     this._productService.getProducts()
     .subscribe(products => {
      this.products = products
      this.filteredProducts =  this.products;
     });
    
  }

  performFilter (filterBy: string): IProduct[] {
    filterBy = filterBy.toLowerCase();
    return this.products.filter( (product: IProduct) => product.productName.toLowerCase().indexOf(filterBy) !== -1)
  }
  toggleImage() {
    this.showImage =  !this.showImage
  }
  onRatingClicked(message: string){
    this.pageTitle = 'Product List ' + message;
  }

  onSelect(product):void {
    this.router.navigate(['products',product.productId])
  }

}
