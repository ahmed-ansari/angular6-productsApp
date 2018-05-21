import { NgModule } from '@angular/core';
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
    StarComponent
  ]
})
export class SharedModule { }
