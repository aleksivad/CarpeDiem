import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserContainerComponent } from './user-container/user-container.component';
import { AppMaterialModule } from '../app-material/app-material.module';
import { WeatherComponent } from './weather/weather.component';
import { AllEventsComponent } from './all-events/all-events.component';
import { TodayComponent } from './today/today.component';
import { BannerComponent } from './banner/banner.component';
import { MoreComponent } from './more/more.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UserContainerComponent,
     WeatherComponent, 
     AllEventsComponent, 
     TodayComponent, 
     BannerComponent, 
     MoreComponent
    ],
  imports: [
    CommonModule,
    UserRoutingModule, 
    AppMaterialModule,
    ReactiveFormsModule,
    FormsModule
  ], 
  entryComponents: [
    MoreComponent
  ]
})
export class UserModule { }