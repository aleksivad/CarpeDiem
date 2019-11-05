import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public opened: boolean = true;

  toggleMenu() {
    this.opened = !this.opened;
  }
}
