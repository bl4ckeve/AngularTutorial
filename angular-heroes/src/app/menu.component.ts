import {Component} from '@angular/core';

@Component({
  selector: 'main-menu',
  styles: [`
    ul {
      margin: 1em;
      padding: 0;
    }

    li {
      display: inline-block;
      margin-right: 10px;
    }

    li a {
      padding: 5px 10px;
      text-decoration: none;
      margin-top: 10px;
      background-color: #eee;
      border-radius: 4px;
    }

    li a:visited, a:link {
      color: #607D8B;
    }

    li a:hover {
      color: #039be5;
      background-color: #CFD8DC;
    }

    li a.active {
      color: #039be5;
    }

  `],
  template: `
    <ul>
      <li *ngFor="let link of links"><a routerLink="{{link.href}}">{{link.label}}</a></li>
    </ul>
  `
})

export class MenuComponent {
  links = [
    {
      href: '/',
      label: 'Home'
    },
    {
      href: '/dashboard',
      label: 'Hero Dashboard'
    },
    {
      href: '/heroes',
      label: 'List Heroes'
    },
  ];
}
