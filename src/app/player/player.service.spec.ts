import { TestBed, inject } from '@angular/core/testing';

import { Player, PlayerService } from './';
import { BoardService } from '../board';
import { BoardGenerator } from '../board/model';

describe('PlayerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayerService, BoardService]
    });
  });

  it('should ...', inject([PlayerService], (service: PlayerService) => {
    expect(service).toBeTruthy();
  }));
  it('should test player initialization', inject([PlayerService], (service: PlayerService) => {
    const players : Player[] = service.players;
    expect(players.length).toEqual(2);
  }));

  it('should test roll dice', inject([PlayerService], (service: PlayerService) => {
    let diceValue : number;
    for (let i = 0; i < 100; i++) {
      diceValue = service.rollDice();
      expect(diceValue).toBeGreaterThan(0);
      expect(diceValue).toBeLessThan(7);
    }
  }));  

  it('should test player turn count', inject([PlayerService], (service: PlayerService) => {
    expect(service).toBeTruthy();
    let testPlayer : Player = new Player('Test');
    let diceValue = 2;
    testPlayer = service.updatePosition(testPlayer, diceValue);
    expect(testPlayer.turnCount).toEqual(0);

    diceValue = 6;
    testPlayer = service.updatePosition(testPlayer, diceValue);
    expect(testPlayer.turnCount).toEqual(1);

    
    // testPlayer.turnCount = 0;
    // testPlayer = service.updatePosition(testPlayer, 6);
    // expect(testPlayer.turnCount).toEqual(1);
    // testPlayer = service.updatePosition(testPlayer, 6);
    // expect(testPlayer.turnCount).toEqual(2);
    // testPlayer = service.updatePosition(testPlayer, 6);
    // expect(testPlayer.turnCount).toEqual(0);

    // testPlayer.turnCount = 0;
    // testPlayer = service.updatePosition(testPlayer, 6);
    // expect(testPlayer.turnCount).toEqual(1);
    // testPlayer = service.updatePosition(testPlayer, 2);
    // expect(testPlayer.turnCount).toEqual(1);

  }));

  it('should test player position', inject([PlayerService], (service: PlayerService) => {
    expect(service).toBeTruthy();
    let testPlayer : Player = new Player('Test');
    let diceValue = 2;
    testPlayer = service.updatePosition(testPlayer, diceValue);
    expect(testPlayer.updatedPosition).toEqual(2);
  }));

  it('should test player updated position on board', inject([PlayerService], (service: PlayerService) => {
    expect(service).toBeTruthy();
    let testPlayer : Player = new Player('Test');
    let diceValue = 2;
    let board = getBoard();
    testPlayer.updatedPosition = service.getUpdatedPosition(testPlayer.updatedPosition, diceValue, board);
    expect(testPlayer.updatedPosition).toEqual(2);

    diceValue = 2;
    testPlayer.updatedPosition = service.getUpdatedPosition(testPlayer.updatedPosition, diceValue, board);
    expect(testPlayer.updatedPosition).toEqual(14);

    testPlayer.updatedPosition = 15;
    diceValue = 2;
    testPlayer.updatedPosition = service.getUpdatedPosition(testPlayer.updatedPosition, diceValue, board);
    expect(testPlayer.updatedPosition).toEqual(7);


  }));

  function getBoard(){
    return BoardGenerator.init();
  }
});
