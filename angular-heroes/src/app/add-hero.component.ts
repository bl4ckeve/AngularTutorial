import {Component} from '@angular/core';
import {HeroService} from './hero.service';
import 'rxjs/add/operator/switchMap';
import {Router} from '@angular/router';

@Component({
  templateUrl: './add-hero.component.html'
})

export class AddHeroComponent {
  constructor(
    private heroService: HeroService,
    private router: Router,
    ) {
  }

  add(name: string): void {
    name = name.trim();
    // check not empty
    if (!name) {
      return;
    }
    this.heroService.create(name)
      .then((hero) => {
        console.log(hero);
        this.router.navigate(['heroes/detail', hero.id]);
      })
      .catch((err) => console.warn('[add-hero] error saving hero: ' + err));
  }
}
