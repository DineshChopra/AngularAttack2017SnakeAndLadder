import { TestBed, inject } from '@angular/core/testing';

import { BoardService } from './board.service';
import { BoardGenerator, Board, Snake, Ladder } from './model';

describe('BoardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BoardService]
    });
  });

  it('should ...', inject([BoardService], (service: BoardService) => {
    expect(service).toBeTruthy();
  }));

  it('should test the snake functionality, when snake found', inject([BoardService], (service: BoardService) => {
    expect(service).toBeTruthy();
    let snake : Snake = new Snake(84, 16);
    let snakeMap = new Map<number, Snake>();
    snakeMap.set(snake.startPoint, snake);
    let board : Board = BoardGenerator.init(snakeMap);
    
    let diceValue = 3;
    let position = snake.startPoint - diceValue;
    let updatedPosition = service.getUpdatedPosition(board, position, diceValue);
    expect(updatedPosition).toEqual(snake.endPoint);
  }));

  it('should test the snake functionality, when snake not found', inject([BoardService], (service: BoardService) => {
    let snake : Snake = new Snake(84, 16);
    let snakeMap = new Map<number, Snake>();
    snakeMap.set(snake.startPoint, snake);
    let board : Board = BoardGenerator.init(snakeMap);
    
    let diceValue = 3;
    let position = snake.startPoint - diceValue;
    position++;
    let updatedPosition = service.getUpdatedPosition(board, position, diceValue);
    expect(updatedPosition).toEqual(position+diceValue);
  }));
  it('should test the ladder functionality, when ladder found', inject([BoardService], (service: BoardService) => {
    let snakeMap = new Map<number, Snake>();
    let ladderMap = new Map<number, Ladder>();
    let ladder = new Ladder(7, 85);
    ladderMap.set(ladder.startPoint, ladder);
    let board : Board = BoardGenerator.init(snakeMap, ladderMap);

    let diceValue = 3;
    let position = ladder.startPoint - diceValue;
    let updatedPosition = service.getUpdatedPosition(board, position, diceValue);
    expect(updatedPosition).toEqual(ladder.endPoint);
  }));    

  it('should test the ladder functionality, when ladder not found', inject([BoardService], (service: BoardService) => {
    let snakeMap = new Map<number, Snake>();
    let ladderMap = new Map<number, Ladder>();
    let ladder = new Ladder(7, 85);
    ladderMap.set(ladder.startPoint, ladder);
    let board : Board = BoardGenerator.init(snakeMap, ladderMap);

    let diceValue = 3;
    let position = ladder.startPoint - diceValue;
    position++;
    let updatedPosition = service.getUpdatedPosition(board, position, diceValue);
    let expectedPosition = position + diceValue;
    expect(updatedPosition).toEqual(expectedPosition);
  }));   
});
