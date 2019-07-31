import { EventBusService } from './service/event-bus.service';
import { Component, ViewChild } from '@angular/core';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('notice', { static: false }) myChildNotice;
  constructor(private eventBus: EventBusService) { }
  banana: object = { name: 'banana', description: 'A yellow fruit', price: 20 };
  pushToNotice() {
    this.myChildNotice.getFromApp('messgFromApp');
  }
  busAppbtn() {
    this.eventBus.eventBus.next();
  }

}
