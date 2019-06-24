import { Component, OnInit } from '@angular/core';
import { EventBusService } from '../service/event-bus.service';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent implements OnInit {

  constructor(private eventBusService: EventBusService) { }
  // public events = [];
  ngOnInit() {
    this.eventBusService.eventBus.subscribe(() => {
      alert();
    });
  }
  noticeThis(item) {
    alert(item);
  }
  getFromApp(item) {
    alert(item);
  }
}
