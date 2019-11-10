import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventCategoryRoutingModule } from './event-category-routing.module';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { AppMaterialModule } from '../app-material/app-material.module';
import {MatInputModule} from '@angular/material';
import { DeleteCategoryComponent } from './delete-category/delete-category.component';


@NgModule({
  declarations: [
    CreateCategoryComponent, 
    EditCategoryComponent, 
    CategoryListComponent, 
    DeleteCategoryComponent
  ],
  imports: [
    CommonModule,
    EventCategoryRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule
  ],
  entryComponents: [
    CreateCategoryComponent,
    EditCategoryComponent, 
    DeleteCategoryComponent
  ],
  providers: [],
  bootstrap: []
})
export class EventCategoryModule { }
