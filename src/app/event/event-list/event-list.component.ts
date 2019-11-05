import { Component, OnInit, ViewChild } from '@angular/core';
import { Event } from '../model/event.model';
import { EventService } from '../event.service';
import { MatDialog, MatTableDataSource, MatSort } from '@angular/material';
import { EventCreateComponent } from '../event-create/event-create.component';
import { EventCloseComponent } from '../event-close/event-close.component';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  public opened: boolean = true;
  displayedColumns: string[] = [
  'eventName', 'dueDate', 'eventTime', 'place', 'eventCategory', 'close'
  ];
  
  dataSource = new MatTableDataSource<Event>();
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private service: EventService,
    private dialog: MatDialog) {
      this.dataSource = new MatTableDataSource(service.data);
  }

  ngOnInit() {
    this.dataSource.data = this.service.getEvents();
    this.dataSource.sort = this.sort;
  }

  addEvent() {
    this.dialog.open(EventCreateComponent, {
      width: '600px'
    })
      .afterClosed()
      .subscribe(result => {
        this.dataSource.data = this.service.getEvents();
      });
  }

  closeEvent(element) {
    this.dialog.open(EventCloseComponent, {
      width: '600px',
      data: {
        event: element
      }
    })
      .afterClosed()
      .subscribe(result => {
        this.dataSource.data = this.service.getEvents();
      });
  }
  
  toggleMenu() {
    this.opened = !this.opened;
  }
}
