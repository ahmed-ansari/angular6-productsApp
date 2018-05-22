import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { BrowserModule } from '@angular/platform-browser';
// import {FormsModule} from '@angular/forms';
import {RouterModule,Routes} from '@angular/router'
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from 'src/app/product-list/product-detail.component';
import { SharedModule } from '../shared/shared.module';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { ProductService } from './product.service';

@NgModule({
  imports: [
    CommonModule,
    // BrowserModule,
    // FormsModule,
    SharedModule,
    RouterModule.forChild([
      {path: 'products', component: ProductListComponent},
      {path: 'products/:id', component: ProductDetailComponent},
    
    ])
    // {enableTracing: true})
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe
  ],
  providers:[
    ProductService
  ]
})
export class ProductsModule { }
