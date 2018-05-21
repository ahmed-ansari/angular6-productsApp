import { Injectable } from '@angular/core';
import { IProduct } from './product';
import {HttpClient, HttpErrorResponse}  from '@angular/common/http';
import {Observable} from 'rxjs';
import {map, catchError,tap} from 'rxjs/operators';
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
    .pipe(tap(data => console.log("all "+ JSON.stringify(data))))
    .pipe(catchError(this.handleError))
    ;
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message)
    return Observable.throw(err.message)
  }
}
