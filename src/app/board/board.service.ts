import { Injectable } from '@angular/core';
import { Board, Snake, Ladder } from './model';

@Injectable()
export class BoardService {

  constructor() { }

  getUpdatedPosition(board : Board, currentPosition : number, diceValue: number){
    let updatedPosition = currentPosition + diceValue;

    let snake : Snake;
    if(snake = this.isSnakeBite(board, updatedPosition)){
      return snake.endPoint;
    }

    let ladder : Ladder;
    if(ladder = this.isLadderFound(board, updatedPosition)){
      return ladder.endPoint;
    }
    return updatedPosition;
  }

  private isSnakeBite(board : Board, position : number) : Snake{
     return board.snakeMap.get(position);
  }
  private isLadderFound(board : Board, position : number) : Ladder{
    return board.ladderMap.get(position);
  }
}
