import { Component } from '@angular/core';

@Component({
  selector: 'navbar',
  template: `
  <nav class="navbar navbar-default">
    <div class="container">
        <div class="navbar-header">
            <a class="navbar-brand" routerLink="" href="#">Home</a>
            <a class="navbar-brand" routerLink="cars" href="#">Cars</a>
        </div>
    </div>
  </nav>
  <router-outlet></router-outlet>
  
  `
})
export class NavbarComponent {}