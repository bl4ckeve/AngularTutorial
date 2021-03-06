
import {Component, Input, OnInit} from '@angular/core';
import {Hero} from './hero';
import {HeroService} from './hero.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'hero-detail',
  styleUrls: [ './hero-detail.component.css' ],
  templateUrl: './hero-detail.component.html'
})

export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap(
        (params: ParamMap) =>
        this.heroService.getHero(/*number*/+params.get('id')))
      .subscribe(
          (hero: Hero) => this.hero = hero
      );
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.heroService.update(this.hero)
      .then( () => this.goBack() )
      .catch( (err) =>  console.warn('[hero-detail] error saving hero: ' + err) );
  }
}
