import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
// import { ConvertToSpacesPipe } from './convert-to-spaces.pipe';
import { StarComponent } from './star/star.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    // ConvertToSpacesPipe,
    StarComponent
  ],
  exports: [
    StarComponent,
    CommonModule,
    FormsModule,
    BrowserModule
  ]
})
export class SharedModule { }
