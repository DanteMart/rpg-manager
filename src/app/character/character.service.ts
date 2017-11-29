import { Injectable, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of }         from 'rxjs/observable/of';
import { delay }      from 'rxjs/operators';

export class SkillPoints {
  constructor(public strength: number, public dexterity: number, public intelligence: number) { }
}

export const AvailableClasses = ['barbarian', 'mage', 'rogue', 'knight'];

export class Character {
  constructor(public id: number, public name: string, public skill_points: SkillPoints, public characterClass: string) { }
}

const CHARACTERS: Character[] = [
  new Character(11, 'Conan', new SkillPoints(50, 25, 25), 'barbarian'),
  new Character(11, 'Conan', new SkillPoints(50, 25, 25), 'barbarian')

];

const FETCH_LATENCY = 500;

@Injectable()
export class CharacterService implements OnDestroy {

  constructor() { console.log('CharacterService instance created.'); }
  ngOnDestroy() { console.log('CharacterService instance destroyed.'); }

  getCharacters(): Observable<Character[]> {
    return of(CHARACTERS).pipe(delay(FETCH_LATENCY));
  }

  getCharacter(id: number | string): Observable<Character> {
    return of(CHARACTERS.find(char => char.id === +id))
      .pipe(delay(FETCH_LATENCY));
  }

  saveCharacter(model: Character) {
    model.id = CHARACTERS.length + 1;
    CHARACTERS.push(new Character(model.id, model.name, new SkillPoints(model.skill_points.strength, model.skill_points.dexterity, model.skill_points.intelligence), model.characterClass));
    model = new Character(1, 'John Doe', new SkillPoints(50, 25, 25), 'barbarian')
  }
}
