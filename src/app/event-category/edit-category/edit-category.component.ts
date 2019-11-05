import { Component, OnInit, Inject } from '@angular/core';
import { Category } from '../model/category.model';
import { CategoryService } from '../category.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})

export class EditCategoryComponent implements OnInit {

  public form: FormGroup;
  public category: Category = new Category();

  constructor(private service: CategoryService,
    public formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data,
    private dialogRef: MatDialogRef<EditCategoryComponent>) {
    this.category = data.category;
  }

  ngOnInit() {
  }

  save(value: string) {
    this.service.editCategory(this.category.id, value);
    this.close();
  }

  close() {
    this.dialogRef.close();
  }
}

