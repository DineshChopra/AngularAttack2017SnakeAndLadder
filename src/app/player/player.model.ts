import { Stat } from './';
export class Player{
    public updatedPosition : number;
    public currentPosition : number;
    public turnCount : number;
    public editOption : boolean = true;
    public stats : Stat[] = [];
    
    constructor(public name : string, public playerIcon:string){
        this.updatedPosition = this.currentPosition = 0;
        this.turnCount = 0;
    }
}