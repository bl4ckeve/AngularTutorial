import {Component} from '@angular/core';

@Component({
  selector: 'main-menu',
  template: `
    <ul>
      <li *ngFor="let link of links"><a href="{{link.href}}">{{link.label}}</a></li>
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
      href: '/heroes',
      label: 'List Heroes'
    },
  ];
}
