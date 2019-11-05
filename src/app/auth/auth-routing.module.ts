import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthContainerComponent } from './auth-container/auth-container.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: AuthContainerComponent,
    children: [
      {
        path: '**',
        component: LoginComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
