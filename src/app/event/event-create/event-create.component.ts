import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Event } from '../model/event.model';
import { EventService } from '../event.service';
import { MatSnackBar, MatDialogRef } from '@angular/material';
import { Category } from 'src/app/event-category/model/category.model';
import { CategoryService } from 'src/app/event-category/category.service';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css']
})

export class EventCreateComponent implements OnInit {

  public form: FormGroup;
  public event: Event = new Event(); 
  public categories : Array <Category> = [];
  public category: Category = null;

  constructor(public formBuilder: FormBuilder, 
    private service: EventService, 
    private categoryService: CategoryService,
    private snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<EventCreateComponent>) { 
      this.categories = this.categoryService.getCategory();
    } 

  ngOnInit() {
    this.form = this.formBuilder.group({
      eventName: [this.event.eventName, Validators.required],
      eventDescription: [this.event.eventDescription],
      place: [this.event.place],
      eventTime: [this.event.eventTime, Validators.required],
      dueDate: [this.event.dueDate],
      eventCategory:[this.event.eventCategory],
      eventImage: [this.event.eventImage],
      active: [this.event.active = true]
    });
  }

  save({ value, valid }: { value: Event, valid: boolean }) {
    if (valid) { 
      this.service.addEvent(value);
      this.form.reset(); 
      this.snackBar.open("Podaci su sacuvani", null, { 
        duration: 2000,
      });
      this.close();
    }
  }

  close(){
    this.dialogRef.close();
  }
}

