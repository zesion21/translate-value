import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fruit-list',
  templateUrl: './fruit-list.component.html',
  styleUrls: ['./fruit-list.component.css']
})
export class FruitListComponent implements OnInit {
  @Input() Banana: object;
  @Output() noticeEventEmiter = new EventEmitter();
  constructor() { }
  products: Array<object> = [{ name: 'apple', description: 'A fruit', price: 26 }, { name: 'orange', price: 90 }];

  ngOnInit() {
    this.products.push(this.Banana);
    console.log(this.Banana);
  }
  share(item: string) {
    // alert(item);
    this.noticeEventEmiter.emit(item);
  }
}
