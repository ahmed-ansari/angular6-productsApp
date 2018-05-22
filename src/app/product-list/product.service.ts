import { Injectable } from '@angular/core';
import { IProduct } from './product';
import {HttpClient, HttpErrorResponse}  from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {map, catchError,tap} from 'rxjs/operators';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/throw';
// import 'rxjs/Rx';
// import 'rxjs/add/operator/catch';

@Injectable(
//   {
//   providedIn: 'root'
// }
)
export class ProductService {
  private _url = './api/products/products.json'

  constructor(private _http: HttpClient) { }

  getProducts(): Observable<IProduct[]> {
    return  this._http.get<IProduct[]>(this._url)
    // .pipe(tap(data => console.log("all "+ JSON.stringify(data))))
    .pipe(catchError(this.handleError))
    ;
  }

  getProduct(id):Observable<IProduct> {
    return of(this.initializeProduct());
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message)
    return Observable.throw(err.message)
  }
  initializeProduct(): IProduct {
    // Return an initialized object
    return {
      productId: 0,
        productName: "Cup",
        productCode: "cup-code",
        // category: null,
        // tags: [],
        releaseDate: null,
        price: null,
        description: null,
        starRating: null,
        imageUrl: null
    };
}
}
