import { Component, OnInit, Input, AfterViewInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Player } from 'skipbo-core';
import { HandComponent } from '../hand/hand.component';
import { DiscardGroupComponent } from '../discard-group/discard-group.component';
import { GameService } from '../../services/game.service';
import { StockPileComponent } from '../stock-pile/stock-pile.component';

@Component({
  selector: 'skipbo-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class PlayerComponent implements OnInit, AfterViewInit {
  @Input() public player: Player;

  @ViewChild('hand') hand: HandComponent;
  @ViewChild('stock') stock: StockPileComponent;
  @ViewChild('discard') discard: DiscardGroupComponent;

  constructor(private _gameService: GameService) {

  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // this.hand.v
  }


  tryStockCard() {
    // this._gameService.game.currentPlayer.placeStockCard();
  }


  tryHandCard() {
    // this._gameService.game.currentPlayer.placeHandCard();
  }

  tryDiscardPile() {
    // this._gameService.game.currentPlayer.placeDiscardCard();
  }
}
