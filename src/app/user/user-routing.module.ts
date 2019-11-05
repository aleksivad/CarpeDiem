import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserContainerComponent } from './user-container/user-container.component';
import { AllEventsComponent } from './all-events/all-events.component';
import { TodayComponent } from './today/today.component';


const routes: Routes = [
  {
    path: '',
    component: UserContainerComponent,
    children: [
      {
        path: '',
        component: TodayComponent
      },
      {
        path: 'today',
        component: TodayComponent
      },
      {
        path: 'all-events',
        component: AllEventsComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
