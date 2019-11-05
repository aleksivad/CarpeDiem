import { Component, OnInit, Inject } from '@angular/core';
import { Event } from '../model/event.model';
import { EventService } from '../event.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-event-close',
  templateUrl: './event-close.component.html',
  styleUrls: ['./event-close.component.css']
})
export class EventCloseComponent implements OnInit {

  public event: Event = new Event();

  constructor(private service: EventService,
    @Inject(MAT_DIALOG_DATA) public data,
    private dialogRef: MatDialogRef<EventCloseComponent>) {
    this.event = data.event;
  }
  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }

  save() {
    this.service.deleteEvent(this.event.eventName);
    this.close();
  }
}
