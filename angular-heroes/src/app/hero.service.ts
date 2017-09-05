import { Injectable } from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './mock-heroes';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {
  private heroesUrl: string = 'api/heroes';
  private jsonHeaders = new Headers({'Content-Type': 'application/json'});
  heroes: Hero[] = [];

  constructor(
    private http: Http
  ) {
    this.heroes.push(... HEROES);
  }

  private handleError(error: any): Promise<any> {
    console.error('[hero-service] ', error);
    return Promise.reject(error.message || error);
  }

  getHeroes(): Promise<Hero[]> {
    return this.http
      .get(this.heroesUrl)
      .toPromise()
      .then(response => {
        console.log(response);
        return response.json().data as Hero[];
      })
      .catch(this.handleError);
  }

  getHero(id: number): Promise<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => {
        console.log(response);
        return response.json().data as Hero;
      })
      .catch(this.handleError);
  }

  update(hero: Hero): Promise<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http
      .put(url, JSON.stringify(hero), {headers: this.jsonHeaders})
      .toPromise()
      .then( () => hero )
      .catch(this.handleError);
  }

  create(name: string): Promise<Hero> {
    return this.http
      .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.jsonHeaders})
      .toPromise()
      .then( (result) => result.json().data as Hero )
      .catch(this.handleError);
  }
}
