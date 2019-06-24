import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EventBusService {
  public eventBus = new Subject();
  constructor() { }
}
