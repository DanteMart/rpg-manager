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
  submitError: boolean = false;
  errorMessage: string = '';
  totalPoints: number = 100;

  constructor(private characterService: CharacterService) {
    this.characters = this.characterService.getCharacters();
    this.availableClasses = AvailableClasses;
  }

  model = new Character(1, 'John Doe', new SkillPoints(50, 25, 25), 'barbarian')

  onSubmit() {
    this.errorMessage = '';
    if(this.model.skill_points.strength + this.model.skill_points.intelligence + this.model.skill_points.dexterity > this.totalPoints) {
      this.errorMessage = "You used more than 100 points in your skills!";
    } else {
      switch (this.model.characterClass) 
      { 
      case'barbarian': 
        if(this.model.skill_points.strength < this.totalPoints/2) {
          this.errorMessage = "A barbarian must have at least half of points in strength!";
        } else {
          this.characterService.saveCharacter(this.model);
        }
        break;
      case'mage': 
        if(this.model.skill_points.intelligence < this.totalPoints/2) {
          this.errorMessage = "A mage must have at least half of points in intelligence!";
        } else {
          this.characterService.saveCharacter(this.model);
        }
        break;
      case'rogue': 
        if(this.model.skill_points.dexterity < this.totalPoints/2) {
          this.errorMessage = "A rogue must have at least half of points in dexterity!";
        } else {
          this.characterService.saveCharacter(this.model);
        }
        break; 
      case'knight': 
        if(this.model.skill_points.dexterity !== this.model.skill_points.strength) {
          this.errorMessage = "A knight must have the same ammount of points in dexterity and strength!";
        } else {
          this.characterService.saveCharacter(this.model);
        }
        break; 
      default: 
        break;
      } 
    }
    
  };

  ngOnInit() {
  }

}
