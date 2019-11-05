import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../model/admin.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private admins: Array<Admin> = [];
  public activeAdmin: Admin;
  public signedIn: boolean = false;

  constructor(private router: Router) {
    //testni podaci
    this.admins.push(new Admin("Aleksandra", "Adamovic", "aleksandra", "aleksandra"));
    this.admins.push(new Admin("Marko", "Ivanovic", "marko", "marko"));
    this.admins.push(new Admin("Igor", "Duilovic", "igor", "igor"));
  }

  public login(username: string, password: string): boolean {
    let result = false;
    this.activeAdmin = null;
    this.admins.forEach(admin => {
      if (admin.username == username && admin.password == password) {
        result = true;
        this.activeAdmin = admin;
      }
    })
    this.signedIn = result;
    return result;
  }

  public logout() {
    this.activeAdmin = null;
    this.signedIn = false;
    this.router.navigate(['/']);
  }
}
