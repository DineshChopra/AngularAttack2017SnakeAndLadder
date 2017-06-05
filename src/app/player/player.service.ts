import { Injectable, EventEmitter } from '@angular/core';

import { Player, Stat } from './';
import { BoardService } from '../board';
import { Board, BoardGenerator } from '../board/model';

@Injectable()
export class PlayerService {

  players : Player[];
  board : Board;
  activePlayer : Player;
  winningEvent : EventEmitter<Player> = new EventEmitter();
  playersEvent : EventEmitter<Player[]> = new EventEmitter();
  constructor(private boardService : BoardService) { 
    this.board = BoardGenerator.init();
    this.initPlayers();
  }

  public initPlayers(){
    let player1 = new Player('Ram','player-1');
    let player2 = new Player('Sham','player-2');
    this.players = new Array<Player>();
    this.players.push(player1);
    this.players.push(player2);
  }

  rollDice() : number{
    const diceValue =  Math.floor(Math.random() * 6) + 1;
    return diceValue;
  }

  updatePosition(player : Player, diceValue : number) : Player{
    this.updatePlayerTurnCount(player, diceValue);
    if(player.turnCount === 3 && diceValue === 6){
      player.updatedPosition = player.currentPosition;
      this.updateStat(player, diceValue);
      this.updateActivePlayer(player);
      return;
    }
    player.updatedPosition = this.getUpdatedPosition(player.updatedPosition, diceValue, this.board); 
    if(player.updatedPosition > 100){
      this.updateActivePlayer(player);
      player.updatedPosition = player.currentPosition;
      this.updateStat(player, diceValue);
      return player;
    }
    if(diceValue !== 6){
      this.updateActivePlayer(player);
      player.currentPosition = player.updatedPosition;
    }
    if(player.updatedPosition === 100){
      this.activePlayer = undefined;
      this.winningEvent.emit(player);
    }
    this.updateStat(player, diceValue);
    return player;
  }
  private updateStat(player : Player, diceValue){
    let stat = new Stat(player.name, diceValue, player.updatedPosition);
    player.stats.push(stat);
  }
  private updateActivePlayer(player : Player){
    if(this.players && this.players.length>0){
      this.activePlayer = this.players.find((p : any)=>{
        if(p.name !== player.name){
          player.turnCount = 0;
          return p;
        }
      });
    }else{
      this.activePlayer = player;
    }
  }
  private updatePlayerTurnCount(player : Player, diceValue : number){
    if(diceValue === 6){
      player.turnCount++;
    }else{
      player.turnCount = 1;
    }
  }
  getUpdatedPosition(position : number, diceValue : number, board? : Board ){
    this.board = board ? board : this.board; 
    return this.boardService.getUpdatedPosition(this.board, position, diceValue);
  }
  
  updatePlayerEvent(){
     this.playersEvent.emit(this.players);
  }  
}
