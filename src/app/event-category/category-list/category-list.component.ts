import { Component, OnInit, ViewChild } from '@angular/core';
import { Category } from '../model/category.model';
import { CategoryService } from '../category.service';
import { MatDialog, MatTableDataSource, MatSort } from '@angular/material';
import { CreateCategoryComponent } from '../create-category/create-category.component';
import { EditCategoryComponent } from '../edit-category/edit-category.component';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  public opened: boolean = true;
  displayedColumns: string[] = [
  'categoryName',  'edit' 
  ];
  
  dataSource = new MatTableDataSource<Category>();
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private service: CategoryService,
    private dialog: MatDialog) {
  }

  ngOnInit() {
    this.dataSource.data = this.service.getCategory();
    this.dataSource.sort = this.sort;
  }

  addCategory() {
    this.dialog.open(CreateCategoryComponent, {
      width: '600px'
    })
      .afterClosed()
      .subscribe(result => {
        this.dataSource.data = this.service.getCategory();
      });
  }

  editCategory(element) {
    this.dialog.open(EditCategoryComponent, {
      width: '600px',
      data: {
        category: element
      }
    })
      .afterClosed()
      .subscribe(result => {
        this.dataSource.data = this.service.getCategory();
      });
  }
  toggleMenu() {
    this.opened = !this.opened;
  }
}