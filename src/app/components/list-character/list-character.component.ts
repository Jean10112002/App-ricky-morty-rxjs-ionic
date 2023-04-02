import { Component, Input, OnInit } from '@angular/core';
import { CharacterI } from 'src/app/interfaces/rickyMortyCharacter.interface';

@Component({
  selector: 'app-list-character',
  templateUrl: './list-character.component.html',
  styleUrls: ['./list-character.component.scss'],
})
export class ListCharacterComponent  implements OnInit {
  @Input() character!:CharacterI;
  constructor() { }

  ngOnInit() {}

}
