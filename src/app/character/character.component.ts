import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Character, SkillPoints, AvailableClasses, CharacterService } from './character.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
  providers: [ CharacterService ]
})
export class CharacterComponent implements OnInit {

  characters: Observable<Character[]>;
  availableClasses: Array<string>;
  constructor(private characterService: CharacterService) {
    this.characters = this.characterService.getCharacters();
    this.availableClasses = AvailableClasses;
  }

  model = new Character(1, '', new SkillPoints(50, 25, 25), 'mage')

  ngOnInit() {
  }

}
