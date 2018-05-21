// import { BrowserModule } from '@angular/platform-browser';
// import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
// import { ProductListComponent } from './product-list/product-list.component';
// import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
// import { StarComponent } from './shared/star/star.component';
// import { ProductDetailComponent } from './product-list/product-detail.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {RouterModule,Routes} from '@angular/router'
import { ProductsModule } from './product-list/products.module';

@NgModule({
  declarations: [
    AppComponent,
    // ProductListComponent,
    // ConvertToSpacesPipe,
    // StarComponent,
    // ProductDetailComponent,
    WelcomeComponent
  ],
  imports: [
    // BrowserModule,
    // FormsModule,
    HttpClientModule,
    ProductsModule,
    RouterModule.forRoot([
      // {path: 'products', component: ProductListComponent},
      // {path: 'products/:id', component: ProductDetailComponent},
      {path: 'welcome', component: WelcomeComponent},
      {path: '', redirectTo: '/welcome', pathMatch: 'full'}
    ],
    {enableTracing: true})
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
