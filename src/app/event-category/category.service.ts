import { Injectable } from '@angular/core';
import { Category } from './model/category.model';
import { EventService } from '../event/event.service';
import { MatTableDataSource } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  dataSource = new MatTableDataSource<Category>();
  private data: Array<Category> = [];
  private STORAGE_KEY: string = "category-list";

  constructor( private eventservice: EventService) { }

  private saveToLocalStorage(){
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.data));
  }

  private loadFromLocalStorage(){
    this.data = JSON.parse(localStorage.getItem(this.STORAGE_KEY)) || [];
     this.data.forEach(t=>{
      t.categoryName 
    }); 
  }

  public addCategory(value: Category) {
    let category = new Category();
    if (this.data.length == 0){
      value.id = 0;
    } else {
      value.id = this.data.map(e => e.id).sort((a, b) => b - a)[0] + 1;
    }
    Object.assign(category, value);
    this.data.push(category);
    this.saveToLocalStorage();
  }

  public getCategory() {
    this.loadFromLocalStorage();
    return this.data;
  }

  public editCategory(id: number, newName: string) {
    this.data.forEach(e => {
      if (e.id == id) {
        e.categoryName = newName
      }
    });
    this.saveToLocalStorage(); 
    let events = this.eventservice.getEvents();
    events.forEach(e => {
      if (e.eventCategory.id == id){
        e.eventCategory.categoryName = newName;
      }
    })
    this.eventservice.saveToLocalStorage()
  }  

  public deleteCategory(id:number){
    let index =- 1;
    this.data.forEach((item,i) => {
      if(id == item.id){
        index = i
      }
    });
      this.data.splice(index, 1);
      this.dataSource = new MatTableDataSource<Category>(this.data);
    this.saveToLocalStorage();
  }
}