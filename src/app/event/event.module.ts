import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventRoutingModule } from './event-routing.module';
import { EventListComponent } from './event-list/event-list.component';
import { EventContainerComponent } from './event-container/event-container.component';
import { EventCreateComponent } from './event-create/event-create.component';
import { EventCloseComponent } from './event-close/event-close.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from '../app-material/app-material.module';

@NgModule({
  declarations: [
    EventListComponent, 
    EventContainerComponent, 
    EventCreateComponent, 
    EventCloseComponent
  ],
  imports: [
    CommonModule,
    EventRoutingModule, 
    AppMaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  entryComponents: [
    EventCreateComponent,
    EventCloseComponent
  ],
  providers: [],
  bootstrap: []
})
export class EventModule { }
