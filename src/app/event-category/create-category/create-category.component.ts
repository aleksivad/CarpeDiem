import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoryService } from '../category.service';
import { MatSnackBar, MatDialogRef } from '@angular/material';
import { Category } from '../model/category.model';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  public form: FormGroup; 
  public category: Category = new Category();

  constructor(public formBuilder: FormBuilder, 
    private service: CategoryService, 
    private snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<CreateCategoryComponent>) { }

  ngOnInit() { 
    this.form = this.formBuilder.group({
      categoryName: [this.category.categoryName]
    });
  }

  save({ value, valid }: { value: Category, valid: boolean }) {
    if (valid) {
      this.service.addCategory(value);
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


