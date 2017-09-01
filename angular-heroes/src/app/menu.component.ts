import {Component} from '@angular/core';

@Component({
  selector: 'main-menu',
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
