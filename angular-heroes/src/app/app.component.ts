import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  styleUrls: [ './app.component.css' ],
  template: `
    <h1>{{title}}</h1>
    <main-menu></main-menu>
    <hero-search></hero-search>
    <router-outlet></router-outlet>
  `,
})

export class AppComponent {
  title = 'Tour of Heroes';
}

