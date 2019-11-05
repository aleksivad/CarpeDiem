import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventContainerComponent } from './event-container/event-container.component';
import { EventListComponent } from './event-list/event-list.component';

const routes: Routes = [
  {
    path: '',
    component: EventContainerComponent,
    children: [
      {
        path: '',
        component: EventListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule { }
