import { Snake, Ladder } from './';
export class Board{
    constructor(public snakeMap : Map<number, Snake>,
                public ladderMap : Map<number, Ladder>){}
}