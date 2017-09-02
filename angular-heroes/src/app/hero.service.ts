import { Injectable } from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './mock-heroes';

@Injectable()
export class HeroService {
  heroes: Hero[] = [];
  constructor() {
    this.heroes.push(... HEROES);
  }

  getHeroes(): Promise<Hero[]> {
    return new Promise(resolve => {
      setTimeout( () => resolve(this.heroes), 300);
    });
  }

  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
      .then( heroes =>
        heroes.find( hero => hero.id === id )
      );
  }
}
