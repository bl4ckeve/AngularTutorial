import { Injectable } from "@angular/core";
import {Hero} from "./hero";
import {HEROES} from "./mock-heroes";

@Injectable()
export class HeroService {
  heroes: Hero[] = [];
  constructor() {
    this.heroes.push(... HEROES);
  }

  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(this.heroes);
  }
}
