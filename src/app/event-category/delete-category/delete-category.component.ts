import { Component, OnInit, Inject  } from '@angular/core';
import { CategoryService } from '../category.service';
import { Category }  from '../model/category.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-delete-category',
  templateUrl: './delete-category.component.html',
  styleUrls: ['./delete-category.component.css']
})
export class DeleteCategoryComponent implements OnInit {

  public category: Category = new Category();

  constructor(private service: CategoryService,
    @Inject(MAT_DIALOG_DATA) public data,
    private dialogRef: MatDialogRef<DeleteCategoryComponent>) {
    this.category = data.category;
  }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }

  save() {
    this.service.deleteCategory(this.category.id);
    this.close();
  }

}
