"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var MenuComponent = (function () {
    function MenuComponent() {
        this.links = [
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
    return MenuComponent;
}());
MenuComponent = __decorate([
    core_1.Component({
        selector: 'main-menu',
        styles: ["\n    ul {\n      margin: 1em;\n      padding: 0;\n    }\n\n    li {\n      display: inline-block;\n      margin-right: 10px;\n    }\n\n    li a {\n      padding: 5px 10px;\n      text-decoration: none;\n      margin-top: 10px;\n      background-color: #eee;\n      border-radius: 4px;\n    }\n\n    li a:visited, a:link {\n      color: #607D8B;\n    }\n\n    li a:hover {\n      color: #039be5;\n      background-color: #CFD8DC;\n    }\n\n    li a.active {\n      color: #039be5;\n    }\n\n  "],
        template: "\n    <ul>\n      <li *ngFor=\"let link of links\"><a routerLink=\"{{link.href}}\">{{link.label}}</a></li>\n    </ul>\n  "
    })
], MenuComponent);
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=menu.component.js.map