import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { PlayerComponent } from './player/player.component';
import { PlayerService } from './player';
import { BoardService } from './board';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ PlayerService, BoardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
