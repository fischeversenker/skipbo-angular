import { Component, OnInit, Input, AfterViewInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Player } from 'skipbo-core';
import { HandComponent } from '../hand/hand.component';
import { DiscardGroupComponent } from '../discard-group/discard-group.component';
import { GameService } from '../../services/game.service';
import { StockPileComponent } from '../stock-pile/stock-pile.component';
import { CdkDropList } from '@angular/cdk/drag-drop';

@Component({
  selector: 'skipbo-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    '[class.have-turn]': 'player.playing'
  }
})
export class PlayerComponent {
  @Input() public player: Player;

  @Input() buildingZones: CdkDropList[] = [];
  @ViewChild('hand') hand: HandComponent;
  @ViewChild('stock') stock: StockPileComponent;
  @ViewChild('discard') discard: DiscardGroupComponent;

  constructor(private _gameService: GameService) {

  }

  mergeZones(...list) {
    return list.reduce((acc, item) => [...acc, ...item], []);
  }
}
