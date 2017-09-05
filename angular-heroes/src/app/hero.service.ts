import { Injectable } from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './mock-heroes';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {
  private heroesUrl: string = 'api/heroes';
  heroes: Hero[] = [];
  constructor(
    private http: Http
  ) {
    this.heroes.push(... HEROES);
  }

  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
      .toPromise()
      .then(response => {
        console.log(response);
        return response.json().data as Hero[];
      })
      .catch(this.handleError);
  }

  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
      .then( heroes =>
        heroes.find( hero => hero.id === id )
      );
  }

  private handleError(error: any): Promise<any> {
    console.error('[hero-service] ', error);
    return Promise.reject(error.message || error);
  }
}
