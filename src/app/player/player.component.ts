import { Component, OnInit } from '@angular/core';

import { PlayerService, Player, Stat } from './';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  constructor(private playerService: PlayerService) { }
  players: Player[];
  activePlayer: Player;
  diceValue: number = 0;
  winner: Player;
  stats : Stat[] = [];
  ngOnInit() {
    this.players = this.playerService.players;
    this.activePlayer = this.players[0];
    this.playerService.winningEvent.subscribe((player) => {
      this.activePlayer = undefined;
      this.winner = player;
    });
  }
  updatePlayer(player: Player) {
    player.editOption = true;
  }
  startGame() {
    this.winner = undefined;
    this.playerService.initPlayers();
    this.players = this.playerService.players;
    this.activePlayer = this.players[0];
  }
  rollDice() {
    this.diceValue = this.playerService.rollDice();
  }
  
  updatedPosition() {
    this.playerService.updatePosition(this.activePlayer, this.diceValue);
    this.updateStats(this.activePlayer);
    this.activePlayer = this.playerService.activePlayer;
    this.diceValue = 0;
    this.playerService.updatePlayerEvent();
  }
  private updateStats(player : Player){
    let stat = player.stats[player.stats.length-1];
    this.stats.push(stat);
  }

}
