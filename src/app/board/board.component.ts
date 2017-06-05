import { Component, OnInit } from '@angular/core';
import { PlayerService, Player } from '../player';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  constructor(private playerService : PlayerService) { }
  private players : Player[];
  ngOnInit() {
    this.playerService.playersEvent.subscribe((players)=>{
      this.players = players;
    });
  }

}
