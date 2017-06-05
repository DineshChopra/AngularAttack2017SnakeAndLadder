import { Snake, Ladder, Board } from './';
export class BoardGenerator{
    private constructor(){}
    private static board : Board;
    public static init(snakeMap? :Map<number, Snake> , ladderMap? : Map<number, Ladder>){
        if(this.board){
            return this.board;
        }
        snakeMap = snakeMap ? snakeMap : this.initSnakeMap();
        ladderMap = ladderMap ? ladderMap : this.ladderMap();
        
        let board : Board = new Board(snakeMap, ladderMap);
        return board;
    }
    private static ladderMap() : Map<number, Ladder>{
        let ladder1 : Ladder = new Ladder(3, 51);
        let ladder2 : Ladder = new Ladder(6, 27);
        let ladder3 : Ladder = new Ladder(20, 70);
        let ladder4 : Ladder = new Ladder(36, 55);
        let ladder5 : Ladder = new Ladder(63, 95);
        let ladder6 : Ladder = new Ladder(68, 98);

        let ladderMap : Map<number, Ladder> = new Map<number, Ladder>();
        ladderMap.set(ladder1.startPoint, ladder1);
        ladderMap.set(ladder2.startPoint, ladder2);
        ladderMap.set(ladder3.startPoint, ladder3);
        ladderMap.set(ladder4.startPoint, ladder4);
        ladderMap.set(ladder5.startPoint, ladder5);
        ladderMap.set(ladder6.startPoint, ladder6);

        return ladderMap;
    }
    private static initSnakeMap() : Map<number, Snake>{
        let snake1 : Snake = new Snake(34, 1);
        let snake2 : Snake = new Snake(25, 5);
        let snake3 : Snake = new Snake(47, 19);
        let snake4 : Snake = new Snake(65, 52);
        let snake5 : Snake = new Snake(87, 57);
        let snake6 : Snake = new Snake(91, 61);
        let snake7 : Snake = new Snake(99, 69);

        let snakeMap : Map<number, Snake> = new Map<number, Snake>();
        snakeMap.set(snake1.startPoint, snake1);
        snakeMap.set(snake2.startPoint, snake2);
        snakeMap.set(snake3.startPoint, snake3);
        snakeMap.set(snake4.startPoint, snake4);
        snakeMap.set(snake5.startPoint, snake5);
        snakeMap.set(snake6.startPoint, snake6);
        snakeMap.set(snake7.startPoint, snake7);
        return snakeMap;
    }
}