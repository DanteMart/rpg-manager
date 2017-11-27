import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Character, CharacterService } from './character.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
  providers: [ CharacterService ]
})
export class CharacterComponent implements OnInit {

  characters: Observable<Character[]>;
  constructor(private characterService: CharacterService) {
    this.characters = this.characterService.getCharacters();
  }

  ngOnInit() {
  }

}
