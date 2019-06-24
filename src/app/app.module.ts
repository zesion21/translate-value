import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { FruitListComponent } from './fruit-list/fruit-list.component';
import { NoticeComponent } from './notice/notice.component';
import { EventBusService } from './service/event-bus.service';
import { HelloComponent } from './hello/hello.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    FruitListComponent,
    NoticeComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [EventBusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
