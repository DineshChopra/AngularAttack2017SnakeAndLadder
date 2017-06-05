import { Snake, Ladder, Board, BoardGenerator } from './';

describe('BoardGenerator', ()=> {
    it('Should test BoardGenerator functionality', () => {
        let snakeMap : Map<number, Snake> = new Map<number, Snake>();
        snakeMap.set(66, new Snake(66, 8));
        let ladderMap : Map<number, Ladder> = new Map<number, Ladder>();
        ladderMap.set(4, new Ladder(4, 18));

        let board : Board = BoardGenerator.init(snakeMap, ladderMap);
        expect(board).not.toBeNull();
        expect(board.snakeMap).toEqual(snakeMap);
        expect(board.ladderMap).toEqual(ladderMap);
    });
});