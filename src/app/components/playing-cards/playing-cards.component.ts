import { Component, input, Input, InputSignal, OnInit } from '@angular/core';
import { MonoTypeOperatorFunction } from 'rxjs';
import { Monster } from '../../models/monster.model';
import { MonsterTypeProperties } from '../../utils/monster.utils';

@Component({
  selector: 'app-playing-cards',
  standalone: true,
  imports: [],
  templateUrl: './playing-cards.component.html',
  styleUrl: './playing-cards.component.css'
})
export class PlayingCardsComponent implements OnInit {

  @Input() monster = new Monster();
  monsterTypeIcon: string = "./assets/energy-icon.jpg";
  backgroundColor: string = "rgb(255, 255,104)";

  ngOnInit(): void {

    this.monsterTypeIcon = MonsterTypeProperties[this.monster.type].imageUrl;
    this.backgroundColor = MonsterTypeProperties[this.monster.type].color;
  }
}
