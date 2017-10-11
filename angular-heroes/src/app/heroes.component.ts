import {Component, OnInit} from '@angular/core';

import {Hero} from './hero';
import {HeroService} from './hero.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Location} from '@angular/common';


@Component({
  selector: 'heroes',
  styleUrls: ['./heroes.component.css'],
  templateUrl: './heroes.component.html'
})

export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService,
              private router: Router,
              private route: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit(): void {
    this.initHeroesList();
  }

  private initHeroesList(): void {
    this.heroService.getHeroes().then((d) => {
      this.heroes = d;
      this.checkForHeroParam();
    });
  }

  private checkForHeroParam() {
    this.route.params
      .subscribe(
        (p: Params) => {
          this.selectHeroById(+p['id']);
        }
      )
    ;
  }

  private selectHeroById(id: number) {
    if (id !== undefined) {
      this.selectedHero = this.heroes.find(
        (h) => h.id === id);
    }
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.location.go('/heroes/' + hero.id);
  }

  goToDetail(): void {
    this.router.navigate(['/heroes/detail', this.selectedHero.id]);
  }

  delete(hero: Hero): void {
    this.heroService
      .delete(hero.id)
      .then(() => {
        console.log('delete hero #' + hero.id);
        this.heroes = this.heroes.filter((h) => h !== hero);
      })
      .catch((err) => console.warn('[add-hero] error deleting hero: ' + err));
  }
}
