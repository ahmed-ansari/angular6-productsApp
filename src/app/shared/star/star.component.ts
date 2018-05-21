import { Component, OnInit, OnChanges,Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit,OnChanges {

  @Input() rating:number = 4;
  starwidth:number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>()
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(): void {
    this.starwidth =  this.rating * 86/5;
  }
  onClick() {
    console.log(` ${this.rating} was clicked`);
    this.ratingClicked.emit(`${this.rating} was clicked`)
  }

}
