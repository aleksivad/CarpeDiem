import { Component, OnInit } from '@angular/core';
import { Event } from '../../event/model/event.model';
import { EventService } from '../../event/event.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Inject } from '@angular/core'; 

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.css']
})
export class MoreComponent implements OnInit {
  public event: Event = new Event();

  constructor(private service: EventService,
    @Inject(MAT_DIALOG_DATA) public data,
    private dialogRef: MatDialogRef<MoreComponent>) {
    this.event = data.event;
  }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }

}
