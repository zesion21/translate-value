import { Component, OnInit } from '@angular/core';
import { EventBusService } from '../service/event-bus.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor(
    private eventBus: EventBusService
  ) { }

  ngOnInit() {
  }
  onBus() {
    this.eventBus.eventBus.next('22');
  }
}
