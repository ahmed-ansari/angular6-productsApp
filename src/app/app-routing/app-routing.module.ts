import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router'
import { WelcomeComponent } from '../welcome/welcome.component';
import { LoginComponent } from '../login/login.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      // {path: 'products', component: ProductListComponent},
      // {path: 'products/:id', component: ProductDetailComponent},
      {path: 'welcome', component: WelcomeComponent},
      {path: 'login', component: LoginComponent},
      {path: '', redirectTo: '/welcome', pathMatch: 'full'},
      {path:'**',component: WelcomeComponent}
    ])
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
