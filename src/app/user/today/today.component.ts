import { Component, OnInit } from '@angular/core';
import { Event } from '../../event/model/event.model';
import { EventService } from '../../event/event.service';
import { Category } from 'src/app/event-category/model/category.model';
import { CategoryService } from 'src/app/event-category/category.service';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { MoreComponent } from '../more/more.component';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {
  public todayEvents: Array<Event> = [];
  dataSource = new MatTableDataSource<Event>();

  constructor(private service: EventService,
    private dialog: MatDialog) {
    this.dataSource = new MatTableDataSource(service.data);
   }

  ngOnInit() {

    this.todayEvents = this.service.getEvents().filter(event => {
      if (event.dueDate.getDate() === new Date().getDate() &&
        event.dueDate.getMonth() == new Date().getMonth() &&
        event.dueDate.getFullYear() == new Date().getFullYear()) {
        return event;
      }
    })
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

}
