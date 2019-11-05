import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.css']
})
export class UserContainerComponent implements OnInit {
  public opened: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
    this.opened = !this.opened;
  }
}
