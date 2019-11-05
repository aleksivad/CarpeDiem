import { Component, OnInit } from '@angular/core';
import { Event } from '../../event/model/event.model';
import { EventService } from '../../event/event.service';
import { Category } from 'src/app/event-category/model/category.model';
import { CategoryService } from 'src/app/event-category/category.service';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { MoreComponent } from '../more/more.component';

@Component({
  selector: 'app-all-events',
  templateUrl: './all-events.component.html',
  styleUrls: ['./all-events.component.css']
})
export class AllEventsComponent implements OnInit {

  dataSource = new MatTableDataSource<Event>();
  public event: Event = new Event(); 
  public categories : Array <Category> = [];
  public category: Category = null;
  public allEvents: Array<Event> = [];
  public filteredEvents: Array<Event> = [];
  public allEventsIncludeToday: Array<Event> = [];

  constructor( private service: EventService, 
    private categoryService: CategoryService,
    private dialog: MatDialog) { 
      this.categories = this.categoryService.getCategory();
      this.dataSource = new MatTableDataSource(service.data);
    }

  ngOnInit() {
    this.initialize();
  }

  private initialize(){
    this.allEvents = this.service.getEvents().filter(event => {
      if (event.dueDate > new Date()){
        return event
      }  
    })
    this.filteredEvents=this.allEvents
  } 

  onCategoryChange(event){
    this.filteredEvents= this.allEvents.filter(e => e.eventCategory.categoryName == event.value.categoryName);
  }

  public more(name){
    this.dialog.open(MoreComponent, {
      width: '600px', 
      data: {
        event: name
      }
    })
    .afterClosed()
    .subscribe(result => {
      this.dataSource.data = this.service.getEvents();
    });
  }

  sortFunction(){
    this.allEvents.sort((a,b) => a.dueDate.getTime() - b.dueDate.getTime())
  }

  public onDateChange(event){
    this.filteredEvents = this.allEvents.filter(e => e.dueDate.getTime() == event.value.getTime())
  }

}
