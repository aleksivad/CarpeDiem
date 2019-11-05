import { Injectable } from '@angular/core';
import { Event } from './model/event.model';
import { MatTableDataSource } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  dataSource = new MatTableDataSource<Event>();
  public data: Array<Event> = [];
  private STORAGE_KEY: string = "event-list";

  constructor() { 
  }

  public saveToLocalStorage(){
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.data));
  }

  private loadFromLocalStorage(){
    this.data = JSON.parse(localStorage.getItem(this.STORAGE_KEY)) || [];
    this.data.forEach(t=>{
      t.dueDate = new Date(t.dueDate);
    });
  }

  public addEvent(event: Event) {
    this.data.push(event);
    this.saveToLocalStorage();
  }

  public getEvents() {
    this.loadFromLocalStorage();
    this.data.forEach(e => {
      var givenDate = e.dueDate;
      var currentDate = new Date();
      currentDate.setHours(0);
      currentDate.setMinutes(0);
      currentDate.setSeconds(0); 
      currentDate.setMilliseconds(0);
      
      e.active =  (givenDate.getTime() >= currentDate.getTime())
    })
    return this.data;
  }

  public getActiveEvent() {
    return this.getEvents().filter(e => e.active);
  }

  public getInactiveEvent() {
    return this.getEvents().filter(e => !e.active);
  }

   public completeEvent(name: string) {
    this.data.forEach(e => {
      if (e.eventName == name) {
        e.active = false; 
      }
    });
    this.saveToLocalStorage();
  } 

  public deleteEvent(name){
    let index=-1;
    this.data.forEach((item,i) => {
      if(name==item.eventName){
        index=i
      }
    });
      this.data.splice(index, 1);
      this.dataSource = new MatTableDataSource<Event>(this.data);
    this.saveToLocalStorage();
  }
}